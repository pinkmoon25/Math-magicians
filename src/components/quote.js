import React, { useEffect, useState } from 'react';
import quotes from '../JSON/quote.json';

const Quote = () => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    const getQuote = () => {
      const response = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(response.quote);
      setAuthor(response.author);
    };
    getQuote();
  }, []);

  return (
    <section className="quote-section" data-testid="quoteSection">
      <blockquote>
        <p>
          {quote}
        </p>
        <figcaption>
          —
          {author}
        </figcaption>
      </blockquote>
    </section>
  );
};

export default Quote;
