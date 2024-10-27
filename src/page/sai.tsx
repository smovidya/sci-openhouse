import { Button } from '../components/ui/button';
import { questionsSai as qSai, questionsSaiExtra as qSaiExtra } from '../components/ui/elements/questions';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { page, mySai } from '../app';

const Question = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0); // Track the current question index
    const [selectedOption, setSelectedOption] = useState(-1); // Track the selected option index
    const [isFinished, setIsFinished] = useState(false); // Indicate whether the first set of questions is completed
    const [answers, setAnswers] = useState<number[]>(Array(6).fill(-1)); // Store all answers
    const [mostFrequent, setMostFrequent] = useState<number[]>([]); // Track the most frequent "sai" values
    const [extraChoices, setExtraChoices] = useState<string[]>([]); // Store filtered extra choices

    const setPage = useSetAtom(page); // Set the page state
    const setMySai = useSetAtom(mySai); // Set the "mySai" state

    // Navigate to the next question
    const handleNext = (option: number) => {
        setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestion] = option;
            setSelectedOption(-1);

            if (currentQuestion < qSai.length - 1) {
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

        setMostFrequent(mostFrequent); // Store the most frequent values

        if (mostFrequent.length === 1) {
            handleResult(mostFrequent[0]);
        } else {
            setMySai(-1); // Indicate a tie
            filterExtraChoices(mostFrequent); // Filter the extra question choices
            setIsFinished(true); // Trigger the extra question
        }
    };

    // Filter the extra question choices based on the two most frequent sai values
    const filterExtraChoices = (mostFrequent: number[]) => {
        const filteredChoices = qSaiExtra[0].choices.filter((_, index) =>
            mostFrequent.includes(index)
        );
        setExtraChoices(filteredChoices);
    };

    // Handle the extra question result
    const handleExtraResult = (extraAnswer: number) => {
        // Use the index of the selected extra choice to determine the sai
        const saiValue = mostFrequent[extraAnswer]; // Use the most frequent value corresponding to the selection
        handleResult(saiValue);
    };

    // Set the result and navigate to the result page
    const handleResult = (sai: number) => {
        console.log('sai :' + sai);
        setPage('major');
        setMySai(sai);
    };

    return (
        <div>
            {!isFinished ? (
                <div className="bg-question flex flex-col">
                    <div className="text-6xl font-SilverStone-Regular text-Yellow my-4 text-center">
                        QUESTION {currentQuestion + 1}
                    </div>
                    <div className="text-lg mb-6 text-Yellow font-ibm-plex-thai">
                        {qSai[currentQuestion].question}
                    </div>
                    <div className="space-y-4 mb-4">
                        {qSai[currentQuestion].choices.map((choice, index) => (
                            <button
                                key={index}
                                onClick={() => handleNext(index)}
                                className={`w-full p-3 rounded-md font-ibm-plex-thai ${
                                    selectedOption === index ? 'bg-gray-400 text-white' : 'bg-gray-200'
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
            ) : (
                <div className="bg-question flex flex-col">
                    <div className="text-6xl font-SilverStone-Regular text-Yellow my-4 text-center">
                        EXTRA QUESTION
                    </div>
                    <div className="text-lg mb-6 text-Yellow font-ibm-plex-thai">
                        {qSaiExtra[0].question}
                    </div>
                    <div className="space-y-4 mb-4">
                        {extraChoices.map((choice, index) => (
                            <button
                                key={index}
                                onClick={() => handleExtraResult(index)}
                                className={`w-full p-3 rounded-md font-ibm-plex-thai ${
                                    selectedOption === index ? 'bg-gray-400 text-white' : 'bg-gray-200'
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

export { Question };
