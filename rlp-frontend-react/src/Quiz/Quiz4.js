import React, { useState } from 'react';
import "./Quiz1.css"
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export default function Quiz4() {
	const questions = [
		{
			questionText: 'Which is the fastest Supercomuter?',
			answerOptions: [
				{ answerText: 'Cray-2', isCorrect: false },
                { answerText: 'LANL', isCorrect: true },
				{ answerText: 'Tianhe-1A', isCorrect: false },
				{ answerText: 'MGGRAPE-3', isCorrect: false },
			],
		},
		{
			questionText: 'Which of these is not a moon of Jupiter?',
			answerOptions: [
				{ answerText: 'Europa', isCorrect: false },
                { answerText: 'Ganymede', isCorrect: true },
				{ answerText: ' Leda', isCorrect: false },
				{ answerText: 'Rhea', isCorrect: false },
			],
		},
		{
			questionText: 'Which of these was first introduced in 1998 Commonwealth Games?',
			answerOptions: [
				{ answerText: 'Football', isCorrect: false },
                { answerText: 'Lawnball', isCorrect: true },
				{ answerText: 'Golf', isCorrect: false },
				{ answerText: 'Cricket', isCorrect: false },
			],
		},
		{
			questionText: 'Which of these is not State of US?',
			answerOptions: [
				{ answerText: 'Albama', isCorrect: false },
                { answerText: 'Kankas', isCorrect: true },
				{ answerText: 'Lowa', isCorrect: false },
				{ answerText: 'Idaho', isCorrect: false },
			],
		},
        {
			questionText: 'When is the Red Cross Day Celebrated?',
			answerOptions: [
				{ answerText: 'April 1', isCorrect: false },
                { answerText: 'October 24', isCorrect: true },
				{ answerText: 'May 8', isCorrect: false },
				{ answerText: ' December 3', isCorrect: false },
			],
		},
        {
			questionText: 'Which of these is not a car of Lamborghini?',
			answerOptions: [
				{ answerText: 'Countach', isCorrect: false },
                { answerText: 'LM002', isCorrect: true },
				{ answerText: 'Miura', isCorrect: false },
				{ answerText: 'Revension', isCorrect: false },
			],
		},
        {
			questionText: 'Which of these gases is not responsible for greenhouse effect?',
			answerOptions: [
				{ answerText: 'Methane', isCorrect: false },
                { answerText: 'Nitrogen dioxide', isCorrect: true },
				{ answerText: 'Water vapour', isCorrect: false },
				{ answerText: 'Sulphur dioxide', isCorrect: false },
			],
		},{
			questionText: 'Which of these is not an endangered speci?',
			answerOptions: [
				{ answerText: 'Amur Leopard', isCorrect: false },
                { answerText: 'Spring Salamander', isCorrect: true },
				{ answerText: 'Gaint Panda', isCorrect: false },
				{ answerText: 'Fin Whale', isCorrect: false },
			],
		},{
			questionText: 'Which of these is not an antivirus?',
			answerOptions: [
				{ answerText: 'ESET', isCorrect: false },
                { answerText: 'Avast', isCorrect: true },
				{ answerText: 'Firefox', isCorrect: false },
				{ answerText: 'Nortorn', isCorrect: false },
			],
		},{
			questionText: 'Which of these elements do not belong to the Period 5 of the Modern Periodic Table?',
			answerOptions: [
				{ answerText: 'Ag(Silver)', isCorrect: false },
                { answerText: 'Xe(Xenon)', isCorrect: true },
				{ answerText: 'Au(gold)', isCorrect: false },
				{ answerText: 'Cd(Cadmium)', isCorrect: false },
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