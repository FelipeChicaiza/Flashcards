import './App.css';
import React, {useState} from 'react';

const App = () => {

  const flashcards = [
    {
      question: "What is the difference between a class and an object?",
      answer: "A class is a blueprint for objects. An object is an instance of a class.",
      difficulty: "easy"
    },
    {
      question: "What is inheritance in Java?",
      answer: "Inheritance allows a class to inherit properties and behavior from another class.",
      difficulty: "easy"
    },
    {
      question: "What is polymorphism?",
      answer: "Polymorphism allows objects of different classes to be treated as objects of a common superclass.",
      difficulty: "easy"
    },
    {
      question: "What is encapsulation?",
      answer: "Encapsulation is the bundling of data and methods that operate on the data into a single unit.",
      difficulty: "easy"
    },
    {
      question: "What is the difference between an interface and an abstract class?",
      answer: "An interface is a contract that defines the methods that a class must implement. An abstract class can have abstract methods and concrete methods.",
      difficulty: "easy"
    },
    {
      question: "What is a constructor?",
      answer: "A constructor is a special method that is called when an object is created.",
      difficulty: "easy"
    },
    {
      question: "What is the difference between the stack and the heap?",
      answer: "The stack is used for static memory allocation and the heap is used for dynamic memory allocation.",
      difficulty: "midium"
    },
    {
      question: "What is the difference between the equals() method and the == operator?",
      answer: "The equals() method compares the values of objects and the == operator compares the references of objects.",
      difficulty: "midium"
    },
    {
      question: "What is the difference between a checked and an unchecked exception?",
      answer: "A checked exception is checked at compile-time and an unchecked exception is checked at runtime.",
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

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCard(flashcards[randomIndex]);
    setShowAnswer(false);
  };

  return (
    <div className="App">
      <div className='title'>
          <h1>Java Flashcards!</h1>
          <p>Click the card to flip it and see the answer to a random Java flashcard to study basic concepts.</p>
          <h5>Number of cards: {flashcards.length}</h5>
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
      <button onClick={getRandomCard}>Next Flashcard</button>
  </div>
  )
}

export default App;