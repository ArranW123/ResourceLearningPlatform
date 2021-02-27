import React, { useState } from 'react';
import "./Quiz1.css"
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export default function Quiz2() {
	const questions = [
		{
			questionText: 'Convert this decimal to percentage: "0.01',
			answerOptions: [
				{ answerText: '0.01%', isCorrect: false },
				{ answerText: '100%', isCorrect: false },
				{ answerText: '1%', isCorrect: true },
				{ answerText: '10%', isCorrect: false },
			],
		},
		{
			questionText: 'Solve: 6 ÷ 2(1+2)',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '1', isCorrect: true },
				{ answerText: '2', isCorrect: false },
				{ answerText: '6', isCorrect: false },
			],
		},
		{
			questionText: 'Calculate the root: x^3 - 7x + 6 = 0',
			answerOptions: [
				{ answerText: '1, 2, -3', isCorrect: true },
				{ answerText: '23,5', isCorrect: false },
				{ answerText: '1, 2, 3', isCorrect: false },
				{ answerText: '-1,-2,-3', isCorrect: false },
			],
		},
		{
			questionText: 'Solve: 9 + 10 = ?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '90', isCorrect: false },
				{ answerText: '21', isCorrect: false },
				{ answerText: '19', isCorrect: true },
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