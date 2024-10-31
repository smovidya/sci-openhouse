import { useSetAtom } from 'jotai';
import { myMajor, page } from '../app';
import { FC, useState } from 'react';
import {
	techQuestion as techQ,
	techExtra as techExtra,
	techSuperUltraSpecial as techSuperUltraSpecial,
} from '../components/ui/elements/questions';

type SaiProps = {
	sai: number;
};

const Tech: FC<SaiProps> = ({ sai }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedOption, setSelectedOption] = useState(-1);
	const [isFinished, setIsFinished] = useState(false);
	const [isFinished2, setIsFinished2] = useState(false);
	const [, setAnswers] = useState<number[]>(Array(6).fill(-1));
	const [filteredChoices, setFilteredChoices] = useState<number[]>([]);

	const setPage = useSetAtom(page);
	const setMyMajor = useSetAtom(myMajor);

	// Navigate to the next question
	const handleNext = (option: number) => {
		setAnswers((prevAnswers) => {
			const newAnswers = [...prevAnswers];
			newAnswers[currentQuestion] = option;
			setSelectedOption(-1);

			const choicesFrequent = determineHighestSai(newAnswers);

			if (currentQuestion < techQ.length - 1) {
				setCurrentQuestion(currentQuestion + 1);
            }
			else if (choicesFrequent.length == 3) {
					setFilteredChoices( choicesFrequent);
                    setCurrentQuestion(0);
                    setIsFinished(true);
			} 
            else if (determineHighestSai(newAnswers).length === 1) {
				handleResult(determineHighestSai(newAnswers)[0]);
			} else {
				setCurrentQuestion(0);
				setIsFinished(true);
			}
			return newAnswers;
		});
	};

	const handleNextExtra1 = (option: number) => {
		setAnswers((prevAnswers) => {
			const newAnswers = [...prevAnswers];
			newAnswers[currentQuestion + 3] = option;
			setSelectedOption(-1);
			// console.log('extra1 ' + newAnswers);

			const choicesFrequent = determineHighestSai(newAnswers);

			if (currentQuestion < techExtra.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } 
            else if (choicesFrequent.length == 2) {
				setFilteredChoices(choicesFrequent);
                setCurrentQuestion(0);
				setIsFinished2(true);
		    }
			else if (determineHighestSai(newAnswers).length === 1) {
				handleResult(determineHighestSai(newAnswers)[0]);
			} else {
				setCurrentQuestion(0);
				setIsFinished2(true);
			}
			return newAnswers;
		});
	};

	const handleNextExtra2 = (option: number) => {
		setAnswers((prevAnswers) => {
			const newAnswers = [...prevAnswers];
			newAnswers[currentQuestion + 5] = option;
			setSelectedOption(-1);
			// console.log('extra2 ' + newAnswers);
			handleResult(determineHighestSai(newAnswers)[0]);
			return newAnswers;
		});
	};

	const determineHighestSai = (answers: number[]) => {
		const freqMap: Record<number, number> = {};
		answers.forEach((num) => {
			if (num !== -1) {
				freqMap[num] = (freqMap[num] || 0) + 1;
			}
		});

		const maxFreq = Math.max(...Object.values(freqMap));
		const mostFrequent = Object.keys(freqMap)
			.filter((key) => freqMap[Number(key)] === maxFreq)
			.map(Number);

		// console.log('Most frequent majors:', mostFrequent);
		return mostFrequent;
	};

	const handleResult = (index: number) => {
		// Assign the major based on the `sai` value
		if (sai === 0) setMyMajor(index + 1);
		else if (sai === 1) setMyMajor(index + 5);
		else if (sai === 2) setMyMajor(index + 9);
		else if (sai === 3) setMyMajor(index + 12);

		setPage('result');
	};

	return (
		<div>
			{!isFinished && (
				<div className="bg-question flex flex-col pt-32 h-dvh">
					<div className="text-6xl font-SilverStone-Regular text-Yellow my-4 text-center">
						QUESTION {techQ[currentQuestion].id}
					</div>
					<div className="text-lg mb-6 text-Yellow font-ibm-plex-thai text-center">
						{techQ[currentQuestion].question}
					</div>
					<div className="space-y-4 mb-4">
						{techQ[currentQuestion].choices
							.filter((_, index) =>
								filteredChoices.length > 0 ? filteredChoices.includes(index) : true
							)
							.map((choice, index) => (
								<button
									key={index}
									onClick={() => {
                                        for (let i = 0; i < techQ[currentQuestion].choices.length; i++) {
                                            if(techQ[currentQuestion].choices[i] === choice){handleNext(i)}
                                        }
                                    }}
									className={`w-full p-3 rounded-md font-ibm-plex-thai ${
										selectedOption === index
											? 'bg-gray-400 text-white'
											: 'bg-gray-200'
									}`}
								>
									{choice}
								</button>
							))}
					</div>
				</div>
			)}
			{isFinished && !isFinished2 && (
				<div className="bg-question flex flex-col pt-32 h-dvh">
					<div className="text-6xl font-SilverStone-Regular text-Yellow my-4 text-center">
						QUESTION {techExtra[currentQuestion].id}
					</div>
					<div className="text-lg mb-6 text-Yellow font-ibm-plex-thai text-center">
						{techExtra[currentQuestion].question}
					</div>
					<div className="space-y-4 mb-4">
                        {techExtra[currentQuestion].choices
							.filter((_, index) =>
								filteredChoices.length > 0 ? filteredChoices.includes(index) : true
							)
							.map((choice, index) => (
								<button
									key={index}
									onClick={() => {
                                        for (let i = 0; i < techExtra[currentQuestion].choices.length; i++) {
                                            if(techExtra[currentQuestion].choices[i] === choice){handleNextExtra1(i)}
                                        }
                                    }}
									className={`w-full p-3 rounded-md font-ibm-plex-thai ${
										selectedOption === index
											? 'bg-gray-400 text-white'
											: 'bg-gray-200'
									}`}
								>
									{choice}
								</button>
							))}
					</div>
					{/* <Button
						onClick={handlePrevious}
						className="w-20 text-Yellow border border-Yellow rounded-md bg-Yellow bg-opacity-25 disabled:bg-Yellow-400 font-ibm-plex-thai"
						disabled={currentQuestion === 0}
					>
						Back
					</Button> */}
				</div>
			)}
			{isFinished && isFinished2 && (
				<div className="bg-question flex flex-col pt-32 h-dvh">
					<div className="text-6xl font-SilverStone-Regular text-Yellow my-4 text-center">
						EXTRA QUESTION
					</div>
					<div className="text-lg mb-6 text-Yellow font-ibm-plex-thai text-center">
						{techSuperUltraSpecial[currentQuestion].question}
					</div>
					<div className="space-y-4 mb-4">
                        {techSuperUltraSpecial[currentQuestion].choices
							.filter((_, index) =>
								filteredChoices.length > 0 ? filteredChoices.includes(index) : true
							)
							.map((choice, index) => (
								<button
									key={index}
									onClick={() => {
                                        for (let i = 0; i < techSuperUltraSpecial[currentQuestion].choices.length; i++) {
                                            if(techSuperUltraSpecial[currentQuestion].choices[i] === choice){handleNextExtra2(i)}
                                        }
                                    }}
									className={`w-full p-3 rounded-md font-ibm-plex-thai ${
										selectedOption === index
											? 'bg-gray-400 text-white'
											: 'bg-gray-200'
									}`}
								>
									{choice}
								</button>
							))}
					</div>
					{/* <Button
						onClick={handlePrevious}
						className="w-20 text-Yellow border border-Yellow rounded-md bg-Yellow bg-opacity-25 disabled:bg-Yellow-400 font-ibm-plex-thai"
						disabled={currentQuestion === 0}
					>
						Back
					</Button> */}
				</div>
			)}

		</div>
	);
};

export { Tech };
