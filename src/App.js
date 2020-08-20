import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";


require('dotenv').config();

const alanKey = ""

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ( { command, articles } ) => {
                if (command === "headlines"){
                    setNewsArticles(articles)
                }
            } 
        });
    }, []);

    return(
        <div>
            <h1>Alan AI News Feed</h1>
            <NewsCards articles={newsArticles} />
        </div>

    );
}


export default App;