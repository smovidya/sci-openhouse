import { Button } from '../components/ui/button';
import {
	questionsSai as qSai,
	// questionsSaiExtra as qSaiExtra,
} from '../components/ui/elements/questions';
import { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { page } from '../app'; // Adjust the import path to your atom file

const Question = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0); //เก็บ index ข้อปัจจุบัน
	const [selectedOption, setSelectedOption] = useState(-1); //เก็บ index of selected choice
	const [finishedSai, setFinishedSai] = useState(false); //เก็บสถานะว่าตอบคำถาม 5 ข้อแรกเสร็จยัง(5 ข้อแรกเป็นคำถามเลือกสาย)
	const [answers, setAnswers] = useState<number[]>(Array(qSai.length).fill(-1)); //list คำตอบทั้งหมด(index)
	const [, setSai] = useState(-1); //เก็บ index ของสายที่ได้ อิงตามใน docs
	const setPage = useSetAtom(page); // Get the setter for the atom
	//เปลี่ยนสถานะหน้า Home
	const handleResult = () => {
		setPage('result');
		return <div></div>
	};

	//set answer ทุกครั้งหลังทำแต่ละข้อเสร็จ
	useEffect(() => {
		const newAnswers = [...answers];
		newAnswers[currentQuestion] = selectedOption;
		setAnswers(newAnswers);
	}, [currentQuestion, selectedOption]);

	//ไปข้อถัดไป
	const handleNext = () => {
		if (currentQuestion < qSai.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			setSelectedOption(-1);
		} else {
			// console.log(answers);
			setFinishedSai(true);
		}
	};

	//หาว่าได้สายยัง โดยได้สายเมื่อมีเพียงหนึ่งสายที่ถูกเลือกมากสุด
	useEffect(() => {
		if (finishedSai) {
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
					// console.log(mostFrequent[0])
				} else {
					setSai(-1); // Indicate a tie or no clear most frequent answer
					// console.log(-1)
				}
			};
			cntHightestSai(answers); // Call the function to calculate the highest SAI
		}
	}, [finishedSai, answers]); // Only run when the quiz is finished

	//ไปข้อก่อนหน้า
	const handlePrevious = () => {
		if (currentQuestion > 0) {
			const previousAnswer = answers[currentQuestion - 1];
			setSelectedOption(previousAnswer);
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	return (
		<div>
			{!finishedSai ? (
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
									setSelectedOption(index);
									handleNext();
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
			) : (
				<div>
					{handleResult()}
				</div>
			)}
		</div>
	);
};

export { Question };
