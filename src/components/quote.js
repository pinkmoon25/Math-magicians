import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    const getQuote = async () => {
      const response = await fetch('https://random-math-quote-api.herokuapp.com/')
        .then((res) => res.json());
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
