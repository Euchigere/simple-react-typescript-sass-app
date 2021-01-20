import React from "react";
import Header from "./Components/Header/header";
import "../App.css";
import Article from "./Components/Article/article";

function App() {
    return (
        <div className="App">
            <Header/>
            <Article />
        </div>
    )
}

export default App;