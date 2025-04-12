import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"


export default function QuoteFetcher() {
    const [quote, setQuote] = useState({ quote: "", author: "" });

    useEffect(() => {
        async function getInitialQuote() {
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const randomQuote = jsonResponse.quote;
            setQuote(randomQuote)
        }
    getInitialQuote();}, []);

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote)
    }


    return (
        <div>
            <button onClick={fetchQuote}>Get Quote Using Handler</button>
            <h4>{quote.text}</h4>
            <h6>{quote.author}</h6>
        </div>
    );
}
