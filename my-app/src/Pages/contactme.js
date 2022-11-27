import React from "react";


function ContactMe() {
    return (
        
       <div className="container">
        <h1>Contact Me</h1>
        <form className="form">
            <div className="name">
                <label htmlFor="firstName">First Name:<br></br></label>
                <br></br>
                <input type="text"name="firstName"className="firstName"/>
                <br>
                </br>
                <br>
                </br>
                <label htmlFor="lastName">Last Name:<br></br></label>
                <br></br>
                <input type="text"name="lastName"className="lastName"/>
                <br>
                </br>
                <br>
                </br>
                <label htmlFor="email">Email:<br></br></label>
                <br></br>
                <input type="email"name="email"id="email"className="email"/>
                <br>
                </br>
                <br>
                </br>
                <label htmlFor="message">Message:<br></br></label>
                <br>
                </br>
               <textarea/>  
            </div>
            <br>
            </br>
            <button type="submit" className="submit">Submit</button>



        </form>

       </div>
       
        
    );
}

export default ContactMe;