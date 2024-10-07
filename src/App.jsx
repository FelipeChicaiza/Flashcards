import './App.css';
import React, {useState} from 'react';

const App = () => {

  const flashcards = [
    {
      question: "What does JVM stand for?",
      answer: "Java Virtual Machine",
      difficulty: "easy"
    },
    {
      question: "whats does Int stand for?",
      answer: "Integer",
      difficulty: "easy"
    },
    {
      question: "What does OOP stand for?",
      answer: "Object Oriented Programming",
      difficulty: "easy"
    },
    {
      question: "What does Double differ from Int?",
      answer: "Decimals",
      difficulty: "easy"
    },
    {
      question: "What does the scan do?",
      answer: "Scans for user input",
      difficulty: "easy"
    },
    {
      question: "What is the simbol for equal?",
      answer: "==",
      difficulty: "easy"
    },
    {
      question: "What is the difference between the stack and the heap?",
      answer: "The stack is used for static memory allocation and the heap is used for dynamic memory allocation.",
      difficulty: "midium"
    },
    {
      question: "Whats the name of this symbol: {}",
      answer: "Curly Brackets",
      difficulty: "Easy"
    },
    {
      question: "What is the difference between a checked and an unchecked exception?",
      answer: "Checked is checked at compile-time and an unchecked exception is checked at runtime.",
      difficulty: "midium"
      
    },
    {
      question: "What is the difference between the public, private, and protected access modifiers?",
      answer: "The public access modifier allows access from any other class. The private access modifier restricts access to the class itself. The protected access modifier allows access from the same package and subclasses.",
      difficulty: "hard"
    }
  ];

  const [currentCard, setCurrentCard] = useState(flashcards[0]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [userGuess, setUserGuess] = useState('');
  // const [correctCount, setCorrectCount] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCard(flashcards[randomIndex]);
    setShowAnswer(false);
  };

  const handleGuessSubmit = () => {
    if (userGuess.toLowerCase() === currentCard.answer.toLowerCase()) {
      setFeedback('Correct!');
      setCurrentStreak(currentStreak + 1);
    } else  {
      setFeedback('Incorrect. Try again!');
      setCurrentStreak(0);
      setLongestStreak(currentStreak);
    }
  }

  const nextCard = () => {
    const currentIndex = flashcards.indexOf(currentCard);
    const nextIndex = (currentIndex + 1) % flashcards.length;
    setCurrentCard(flashcards[nextIndex]);
    setShowAnswer(false);
  };

  const previousCard = () => {
    const currentIndex = flashcards.indexOf(currentCard);
    const previousIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    setCurrentCard(flashcards[previousIndex]);
    setShowAnswer(false);
  };


  return (
    <div className="App">
      <div className='title'>
          <h1>Java Flashcards!</h1>
          <p>Click the card to flip it and see the answer to a random Java flashcard to study basic concepts.</p>
          <h3>Number of cards: {flashcards.length}</h3>
      </div>
      <div className='streak-counter'>
        <h4>Current Streak:{currentStreak} Longest Streak: {longestStreak}</h4>
      </div>

      <div className={`card-container ${showAnswer ? 'flipped' : ''}`} onClick={() => setShowAnswer(!showAnswer)}>
        <div className='card'>
          <div className="card-front">
            <h2>{currentCard.question}</h2>
          </div>
          <div className="card-back">
            <p>{currentCard.answer}</p>
          </div>
        </div>
      </div>
      <div className='user-input'>
          Guess the answer here:{'  '}
          <input className='input' type='text' placeholder='Enter your guess'
          value={userGuess} onChange={handleInputChange}
          ></input>
          <button onClick={handleGuessSubmit}>Submit Guess</button>
          <h3>{feedback}</h3>
        </div>
      <div>
      <button onClick={nextCard}>⏮️</button>
      <button onClick={previousCard}>⏭️</button>
      <button onClick={getRandomCard}>Next Flashcard</button>
      </div>
  </div>
  )
}

export default App;