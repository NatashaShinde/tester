import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


    const HomeOne = () => {
    
        return (
            <div className="container">
        <h1>last message deleiverd</h1>
                <h1 id="messageOut"></h1>
            </div>
    );
}

export default HomeOne;
