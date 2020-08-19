import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = "";

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ( { command } ) => {
                if (command === "testCommand"){
                    alert("this was executed");
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