import React from "react";

function MyPortfolio() {
    return (
    <div>
        <h1>My Portfolio</h1>
        <h2>My Work</h2>
        <ul>
            <li>    
            <a href="https://kevingkorza.github.io/WorkDay_Schedule/" target="_blank">Work Day Scheduler</a>
            </li>
            <br>
            </br>
            <img src={require('../../src/Images/workdayschedule.png')} height={400} width={600} />
            <li>
                <a href="https://kevingkorza.github.io/PasswordGenerator/" target="_blank">Password Generator</a>
            </li>
            <br>
            </br>
            <img src={require('../../src/Images/passwordgenerator.png')} height={400} width={600} />
            <li>
                <a href ="https://sheltered-atoll-76141.herokuapp.com/" target="_blank">Team Generator</a>
            </li>
            <br>
            </br>
            <img src={require('../../src/Images/teamgenerator.png')} height={400} width={600} />
        </ul>
        


        </div>

    );
}

export default MyPortfolio;