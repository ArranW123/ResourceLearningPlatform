
import React, { useState } from 'react';
import "./Quiz1.css"
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export default function Quiz1() {
	const questions = [
		{
			questionText: 'What does "GUI" stand for?',
			answerOptions: [
				{ answerText: 'Graphical Utility Interface', isCorrect: false },
				{ answerText: 'Graphics Underneath Interface', isCorrect: false },
				{ answerText: 'Graphical User Interface', isCorrect: true },
				{ answerText: 'Graphic Uplink Interface', isCorrect: false },
			],
		},
		{
			questionText: 'What type of storage does not accept new information?',
			answerOptions: [
				{ answerText: 'Hard Drive', isCorrect: false },
				{ answerText: 'ROM', isCorrect: true },
				{ answerText: 'RAM', isCorrect: false },
				{ answerText: 'Removable Media', isCorrect: false },
			],
		},
		{
			questionText: 'Microprocessors are used in?',
			answerOptions: [
				{ answerText: 'Computers', isCorrect: true },
				{ answerText: 'DVD players', isCorrect: false },
				{ answerText: 'Calculators', isCorrect: false },
				{ answerText: 'Remote Controls', isCorrect: false },
			],
		},
		{
			questionText: 'What componenet of the computer is correctly associated with the function it performs?',
			answerOptions: [
				{ answerText: 'Microprocessor: Storage', isCorrect: false },
				{ answerText: 'Random Access Memory: Processing', isCorrect: false },
				{ answerText: 'Optical Drive: Input', isCorrect: false },
				{ answerText: 'Monitor: Output', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
	<body>
		<Header />
		<div className = 'position'> 
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<div className='back'>
						<Link to = {"QuizMenu"} className='backbtn'>Back</Link>
					</div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span className = "text">Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button class = "quizbutton"onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
		</body>
	);
}