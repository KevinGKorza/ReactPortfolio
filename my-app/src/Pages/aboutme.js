// import React from "react";

// function AboutMe() {
//     return <div>AboutMe</div>
// }

// export default AboutMe;

import React from "react";


function AboutMe() {
    return(
    <div>
        <h1>About Me</h1>
        <p>Hello! Welcome to my Portfolio! My name is Kevin Korza!</p>
        <img src={require('../Images/me.jpg').default} />
        <p>I am a graduate of The University of Connecticut where I have received my Bachelor's degree in Communication!</p> 
        <p>My background includes Production, Media, Editing, Writing, Graphic Design, and Marketing!</p>
        </div>
    );
}

export default AboutMe;