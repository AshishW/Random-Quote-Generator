import { useState } from "react";
import "./QuoteGenerator.css";

export default function QuoteGenerator(){
    const [quote, setQuote] = useState("Click the below button to generate a random quote!");

    const quotes = [
        "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "It always seems impossible until it’s done. - Nelson Mandela",
        "I am not afraid... I was born to do this. - Joan of Arc",
        "Believe you can and you’re halfway there. - Theodore Roosevelt"
      ];
    
    function handleButtonClick(){
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }

    return (
        <div className="quote-generator-container">
            <h1>Random Quote Generator</h1>
            <div className="quote-container">
                <p>{quote}</p>
            </div>
            <button onClick={handleButtonClick}>Generate</button>
        </div>
    );
}