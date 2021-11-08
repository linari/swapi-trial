import React from 'react';
/* Quotes to show in footer */
/* Those are five here and appears randomly */
export const Quote = () => {

  const movieQuotes = [
    {text: "In a dark place we find ourselves, and a little more knowledge lights our way.", author: "Yoda"},
    {text: "The Force will be with you. Always.", author: "Obi-Wan Kenobi"},
    {text: "There’s always a bigger fish.", author: "Qui-Gon Jinn"},
    {text: "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.", author: "Yoda"},
    {text: "Power! Unlimited power!", author: "Darth Sidious"}
  ];

  const randomNumber = Math.floor(Math.random() * movieQuotes.length);

  return (
    <div className="quote">
      <div className="quote-text">"{movieQuotes[randomNumber].text}"</div>
      <div className="quote-author">{movieQuotes[randomNumber].author}</div>
    </div>
  )
}


