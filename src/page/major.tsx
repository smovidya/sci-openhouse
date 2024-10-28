import { useAtom, useSetAtom } from 'jotai';
import { mySai, myMajor, page } from '../app';
import { FC, useState, useEffect } from 'react';
import {
	bioQuestion as bioQ,
	phyQuestion as phyQ,
	enviQuestion as enviQ,
	techQuestion as techQ,
	questionsExtra as qExtra,
} from '../components/ui/elements/questions';
import { Button } from '../components/ui/button';

type SaiProps = {
	sai: number;
};

const Major: FC<SaiProps> = ({ sai }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedOption, setSelectedOption] = useState(-1);
	const [isFinished, setIsFinished] = useState(false);
	const [answers, setAnswers] = useState<number[]>(Array(6).fill(-1));
	const [extraChoices, setExtraChoices] = useState<string[]>([]);

	const setPage = useSetAtom(page);
	const setMySai = useSetAtom(mySai);
	const setMyMajor = useSetAtom(myMajor); // Set the "mySai" state

	// Determine the question set based on the sai value
	const [currentQuestionSet, setCurrentQuestionSet] = useState(bioQ);

	useEffect(() => {
		switch (sai) {
			case 0:
				setCurrentQuestionSet(bioQ);
				break;
			case 1:
				setCurrentQuestionSet(phyQ);
				break;
			case 2:
				setCurrentQuestionSet(enviQ);
				break;
			case 3:
				setCurrentQuestionSet(techQ);
				break;
			default:
				setCurrentQuestionSet(bioQ); // Default to bioQ if sai is not recognized
		}
	}, [sai]);

	// Navigate to the next question
	const handleNext = (option: number) => {
		setAnswers((prevAnswers) => {
			const newAnswers = [...prevAnswers];
			newAnswers[currentQuestion] = option;
			setSelectedOption(-1);

			if (currentQuestion < currentQuestionSet.length - 1) {
				setCurrentQuestion(currentQuestion + 1);
			} else {
				determineHighestSai(newAnswers);
			}

			return newAnswers;
		});
	};

	// Navigate to the previous question
	const handlePrevious = () => {
		if (currentQuestion > 0) {
			const previousAnswer = answers[currentQuestion - 1];
			setSelectedOption(previousAnswer);
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	// Determine the most frequent "sai" or handle tie cases
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

		if (mostFrequent.length === 1) {
			handleResult(mostFrequent[0]);
		} else {
			filterExtraChoices(mostFrequent);
			setIsFinished(true);
		}
	};

	// Filter the extra question choices based on the most frequent sai values
	const filterExtraChoices = (mostFrequent: number[]) => {
		const filteredChoices = qExtra[0].choices.filter((_, index) =>
			mostFrequent.includes(index)
		);
		setExtraChoices(filteredChoices);
	};

	// Handle the extra question result
	const handleExtraResult = (extraAnswer: number) => {
		const selectedSai = extraChoices[extraAnswer]; // Use the selected choice to determine the sai
		handleResult(Number(selectedSai));
	};

	// Set the result and navigate to the result page
	const handleResult = (index: number) => {
		if (sai == 0) {
			switch (index) {
				case 0:
					setMyMajor(1);
					break;
				case 1:
					setMyMajor(2);
					break;
				case 2:
					setMyMajor(3);
					break;
				case 3:
					setMyMajor(4);
					break;
				default:
					setMyMajor(-1);
					break;
			}
		} else if (sai == 1) {
			switch (index) {
				case 0:
					setMyMajor(5);
					break;
				case 1:
					setMyMajor(6);
					break;
				case 2:
					setMyMajor(7);
					break;
				case 3:
					setMyMajor(8);
					break;
				default:
					setMyMajor(-1);
					break;
			}
		} else if (sai == 2) {
			switch (index) {
				case 0:
					setMyMajor(9);
					break;
				case 1:
					setMyMajor(10);
					break;
				case 2:
					setMyMajor(11);
					break;
				default:
					setMyMajor(-1);
					break;
			}
		} else if (sai == 3) {
			switch (index) {
				case 0:
					setMyMajor(12);
					break;
				case 1:
					setMyMajor(13);
					break;
				case 2:
					setMyMajor(14);
					break;
				case 3:
					setMyMajor(15);
					break;
				case 4:
					setMyMajor(16);
					break;
				case 5:
					setMyMajor(17);
					break;
				default:
					setMyMajor(-1);
					break;
			}
		}

		console.log('major :' + index);
		setPage('result');
	};

	return (
		<div>
			{!isFinished ? (
				<div className="bg-question flex flex-col">
					<div className="text-6xl font-SilverStone-Regular text-Yellow my-4 text-center">
						QUESTION {currentQuestionSet[currentQuestion].id}
					</div>
					<div className="text-lg mb-6 text-Yellow font-ibm-plex-thai">
						{currentQuestionSet[currentQuestion].question}
					</div>
					<div className="space-y-4 mb-4">
						{currentQuestionSet[currentQuestion].choices.map(
							(choice, index) => (
								<button
									key={index}
									onClick={() => handleNext(index)}
									className={`w-full p-3 rounded-md font-ibm-plex-thai ${
										selectedOption === index
											? 'bg-gray-400 text-white'
											: 'bg-gray-200'
									}`}
								>
									{choice}
								</button>
							)
						)}
					</div>
					<Button
						onClick={handlePrevious}
						className="w-20 text-Yellow border border-Yellow rounded-md bg-Yellow bg-opacity-25 disabled:bg-Yellow-400 font-ibm-plex-thai"
						disabled={currentQuestion === 0}
					>
						Back
					</Button>
				</div>
			) : (
				<div className="bg-question flex flex-col">
					<div className="text-6xl font-SilverStone-Regular text-Yellow my-4 text-center">
						EXTRA QUESTION
					</div>
					<div className="text-lg mb-6 text-Yellow font-ibm-plex-thai">
						{qExtra[0].question}
					</div>
					<div className="space-y-4 mb-4">
						{extraChoices.map((choice, index) => (
							<button
								key={index}
								onClick={() => handleExtraResult(index)}
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
					<Button
						onClick={handlePrevious}
						className="w-20 text-Yellow border border-Yellow rounded-md bg-Yellow bg-opacity-25 disabled:bg-Yellow-400 font-ibm-plex-thai"
						disabled={currentQuestion === 0}
					>
						Back
					</Button>
				</div>
			)}
		</div>
	);
};

export { Major };
