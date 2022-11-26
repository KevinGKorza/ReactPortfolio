import React from "react";
import Resume from "../Resume/Kevin_Korza_Resume.pdf";
function MyResume() {
    return (
        <div>
            <h1> My Resume </h1>

            <button className="button">
            <a className="button" href={Resume} download="Kevin_Korza_Resume.pdf">
                    Download Resume
                </a>
            </button>


            <h2> My Strengths </h2>

            <ul>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    Bootstrap
                </li>
                <li>
                    JQuery
                </li>
                <li>
                    React
                </li>
                <li>
                    Express
                </li>
                <li>
                    MySQL
                </li>
                <li>
                    Node
                </li>
            </ul>

        </div>



    );
}

export default MyResume;