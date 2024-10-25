import { Button } from '../components/ui/button';
import {
	questionsSai as qSai,
	questionsSaiExtra as qSaiExtra,
} from '../components/ui/elements/questions';
import { useState } from 'react';
// import { Result } from './result';
import { useSetAtom } from 'jotai';
import { page, mySai } from '../app'; // Adjust the import path to your atom file

const Question = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0); //เก็บ index ข้อปัจจุบัน
	const [selectedOption, setSelectedOption] = useState(-1); //เก็บ index of selected choice
	const [isFinished, setIsFinished] = useState(false); //เก็บสถานะว่าตอบคำถาม 5 ข้อแรกเสร็จยัง(5 ข้อแรกเป็นคำถามเลือกสาย)
	const [answers, setAnswers] = useState<number[]>(Array(6).fill(-1)); //list คำตอบทั้งหมด(index)
	const [, setSai] = useState(-1); //เก็บ index ของสายที่ได้ อิงตามใน docs

	//ไปข้อถัดไป
	const handleNext = (option: number) => {
		setAnswers((prevAnswers) => {
			const newAnswers = [...prevAnswers];
			newAnswers[currentQuestion] = option;
			const cntHightestSai = (answers: number[]) => {
				const freqMap: Record<number, number> = {};

				// Count the frequency of each answer
				answers.forEach((num) => {
					if (num !== -1) {
						freqMap[num] = (freqMap[num] || 0) + 1;
					}
				});

				// Find the highest frequency
				const maxFreq = Math.max(...Object.values(freqMap));

				// Find the answers that have the highest frequency
				const mostFrequent = Object.keys(freqMap)
					.filter((key) => freqMap[Number(key)] === maxFreq)
					.map(Number);

				// Check if there is only one most frequent answer
				if (mostFrequent.length === 1) {
					setSai(mostFrequent[0]); // Set sai to the most frequent answer
					handleResult(mostFrequent[0]);
				} else {
					setIsFinished(true);
					// console.log(-1)
				}
			};
			setSelectedOption(-1);
			if (currentQuestion < qSai.length - 1) {
				setCurrentQuestion(currentQuestion + 1);
			} else {
				cntHightestSai(newAnswers);
			}
			return newAnswers;
		});
	};

	//ไปข้อก่อนหน้า
	const handlePrevious = () => {
		if (currentQuestion > 0) {
			const previousAnswer = answers[currentQuestion - 1];
			setSelectedOption(previousAnswer);
			setCurrentQuestion(currentQuestion - 1);
		}
	};
	const setPage = useSetAtom(page); // Get the setter for the atom
	const setMySai = useSetAtom(mySai);

	const handleResult = (sai: number) => {
		console.log('sai :' + sai);
		setPage('result');
		setMySai(2);
	};

	return (
		<div>
			{!isFinished && (
				<div className="bg-question flex flex-col">
					<div className="text-6xl font-SilverStone-Regular text-Yellow my-4 text-center">
						QUESTION {currentQuestion + 1}
					</div>
					<div className="text-lg mb-6 text-Yellow font-ibm-plex-thai">
						{qSai[currentQuestion].question}
					</div>
					<div className="space-y-4 mb-4">
						{qSai[currentQuestion].choices.map((choices, index) => (
							<button
								key={index}
								onClick={() => {
									handleNext(index);
								}}
								className={`w-full p-3 rounded-md font-ibm-plex-thai ${
									qSai[currentQuestion].choices[selectedOption] === choices
										? 'bg-gray-400 text-white'
										: 'bg-gray-200'
								}`}
							>
								{choices}
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
			{isFinished && (
				<div className="bg-question flex flex-col">
					<div className="text-6xl font-SilverStone-Regular text-Yellow my-4 text-center">
						QUESTION {6}
					</div>
					<div className="text-lg mb-6 text-Yellow font-ibm-plex-thai">
						{qSaiExtra[0].question}
					</div>
					<div className="space-y-4 mb-4">
						{qSaiExtra[0].choices.map((choices, index) => (
							<button
								key={index}
								onClick={() => {
									handleNext(index);
								}}
								className={`w-full p-3 rounded-md font-ibm-plex-thai ${
									qSaiExtra[0].choices[selectedOption] === choices
										? 'bg-gray-400 text-white'
										: 'bg-gray-200'
								}`}
							>
								{choices}
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

export { Question };