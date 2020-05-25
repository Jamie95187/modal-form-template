import React from 'react';
import './App.css';
import { Container } from './Container';
import { Filler } from './Filler';

// Stateless Component (Dumb Component)

const App = () => {

  const triggerText = 'Open Form';

  // The submit method logs the name and email from the form to the console.
  // You can send them to an autoresponser or store them in a database.

  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  }

  return (
    <div className="App">
      <Filler />
      <Container triggerText={triggerText} onSubmit={onSubmit}/>
      <Filler />
      <Filler />
      <Filler />
    </div>
  )
}

export default App;
