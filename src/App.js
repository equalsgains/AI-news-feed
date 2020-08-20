import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

require('dotenv').config();

const alanKey = "385a9608d1538ff30eb66423884de8472e956eca572e1d8b807a3e2338fdd0dc/stage"

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ( { command, articles } ) => {
                if (command === "headlines"){
                    setNewsArticles(articles);
                }
            } 
        });
    }, []);

    return(
        <div>
            <h1>Alan AI News Feed</h1>
        </div>

    );
}


export default App;