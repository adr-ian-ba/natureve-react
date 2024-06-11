// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import quizData from '../../assets/tempBe/quizData.json';
import plantInfo from '../../assets/tempBe/PlantInfo.json';
import Navbar from '../../components/Navbar';

const plantList = [
  "succulent",
  "basil",
  "cactus",
  "mini tomato",
  "rosemary",
  "lavender",
  "janda bolong",
  "mint",
  "thyme",
  "parsley",
  "chives"
];

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [, setPerfectPlantIndex] = useState(null);
  const [perfectPlantInfo, setPerfectPlantInfo] = useState(null);

  const handleAnswer = (answer, weight) => {
    const updatedAnswers = [...answers, { answer, weight }];
    setAnswers(updatedAnswers);

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizFinished(false);
    setPerfectPlantIndex(null);
    setPerfectPlantInfo(null);
  };

  useEffect(() => {
    if (quizFinished) {
      console.log("Quiz finished, calculating result...");
      const randomPlantIndex = calculateRandomPlant();
      setPerfectPlantIndex(randomPlantIndex);

      // Find plant info based on the random plant index
      const plantName = plantList[randomPlantIndex];
      const plant = plantInfo.find(plant => plant.name.toLowerCase() === plantName.toLowerCase());
      setPerfectPlantInfo(plant);
    }
  }, [answers, quizFinished]);

  const calculateRandomPlant = () => {
    console.log("Calculating random plant index...");
    return Math.floor(Math.random() * plantList.length);
  };

  const renderAnswers = () => {
    const question = quizData.questions[currentQuestion];
    return (
      <div>
        <h2>{question.question}</h2>
        <ul>
          {question.answers.map((answer, index) => (
            <li key={index}>
              <button onClick={() => handleAnswer(answer.answer, answer.weight)}>
                {answer.answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className='quiz-page'>

      <Navbar />
      <div className="quiz">
        <h1>Plant Quiz</h1>
        {quizFinished ? (
          <div>
            <h2>Perfect Plant for You:</h2>
            {perfectPlantInfo ? (
              <div className="plant-info">
                <p>Name: {perfectPlantInfo.name}</p>
                <p>Sunlight: {perfectPlantInfo.sunlight}</p>
                <p>Water: {perfectPlantInfo.water}</p>
                <p>Overall Rating: {perfectPlantInfo.overall_rating}</p>
                <p>Description: {perfectPlantInfo.description}</p>
                <p>Suitable Places: {perfectPlantInfo.suitable_places}</p>
                <img src={perfectPlantInfo.image_link} alt={perfectPlantInfo.name} />
              </div>
            ) : (
              <p>Unknown</p>
            )}
            <div className="retake-button">
              <button onClick={handleRetakeQuiz}>Retake Quiz</button>
            </div>
          </div>
        ) : (
          renderAnswers()
        )}
      </div>
    </div>
  );
};

export default Index;
