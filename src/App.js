import axios from "axios";
import React, {Fragment, useState, useEffect} from "react";

function App() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        axios.get('https://api.quotable.io/random')
        .then((result) => result.data)
        .then((quote) => {
            setQuote(quote.content)
            setAuthor(quote.author)
        })
    }, [])

    let getNewQuote = () => {
        axios.get('https://api.quotable.io/random')
        .then((result) => result.data)
        .then((quote) => {
            setQuote(quote.content)
            setAuthor(quote.author)
        })
    }

    return(
        <Fragment>
            <h1 className="quote-title">WELCOME TO <br></br> RANDOM QUOTE GENERATOR</h1>
            <div className="quote-box">
                <p className="quote-text">" {quote} "</p>
                <p className="quote-author">- {author}</p>
                <div className="button">
                    <button className="get-quote" onClick={getNewQuote}>Get New Quote</button>
                    <div className="sosmed">
                        <a href="https://www.facebook.com/khencahyo.13" target="_blank" className="facebook"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.github.com/KhenCahyo13" target="_blank" className="github"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
            <p className="created-by">Creted By KhenCahyo</p>
            <p className="references">FREE API References By <a className="underline text-indigo-600" href="https://github.com/lukePeavey/quotable" target="_blank">Quotable.io</a></p>
        </Fragment>
    )
}

export default App;