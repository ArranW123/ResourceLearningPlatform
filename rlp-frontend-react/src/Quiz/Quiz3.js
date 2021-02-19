import React, { useState } from 'react';
import "./Quiz1.css"
import Header from '../Header/Header';

export default function Quiz3() {
	const questions = [
		{
			questionText: 'When methane burns in oxygen, carbon dioxide and water are made. Which is a reactant?',
			answerOptions: [
				{ answerText: 'Carbon Dioxide', isCorrect: false },
                { answerText: 'Oxygen', isCorrect: true },
				{ answerText: 'Water', isCorrect: false },
				
			],
		},
		{
			questionText: 'Copper oxide and carbon dioxide are made when copper carbonate is heated strongly, which is a product?',
			answerOptions: [
				{ answerText: 'Heat', isCorrect: false },
				{ answerText: 'Copper carbonate', isCorrect: false },
                { answerText: 'Copper oxide', isCorrect: true },
			],
		},
		{
			questionText: 'What name is given to the force that holds atoms together in a compound?',
			answerOptions: [
				{ answerText: 'Gravity', isCorrect: false },
                { answerText: 'Chemical bond', isCorrect: true },
				{ answerText: 'Electrostatic attraction', isCorrect: false },
			],
		},
		{
			questionText: 'What is another name for combustion?',
			answerOptions: [
                { answerText: 'Burning', isCorrect: true },
				{ answerText: 'Displacement', isCorrect: false },
				{ answerText: 'Reduction', isCorrect: false },
			],
		},
        {
			questionText: 'What is a Hydrocarbon?',
			answerOptions: [
                { answerText: 'A compound that contains carbon and hydrogen', isCorrect: true },
				{ answerText: 'A compound made from carbon and hydrogen only', isCorrect: false },
				{ answerText: 'A compound that has been obtained from crude oil', isCorrect: false },
			],
		},
        {
			questionText: 'Combustion reactions always release energy. What word can be used to describe them?',
			answerOptions: [
                { answerText: 'Exothermic', isCorrect: true },
				{ answerText: 'Endothermic', isCorrect: false },
				{ answerText: 'Reversible', isCorrect: false },
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