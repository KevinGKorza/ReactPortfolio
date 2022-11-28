import React, { useState } from "react";

function ContactMe() {
    const [message, setMessage] = useState("");
    const [error, setErrorMessage] = useState(null);
    function validEmail(email) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
    }
    const handleChange = (event) => {
        if (!validEmail(event.target.value)) {
            setErrorMessage('Please enter a valid email address');
        } else {
            setErrorMessage(null);
        } setMessage(event.target.value);
    };

    return (
        <div className="container">
            <h1>Contact Me</h1>
            <form className="form">
                <div className="name">
                    <label htmlFor="firstName">First Name:<br></br></label>
                    <br></br>
                    <input type="text" name="firstName" className="firstName" />
                    <br>
                    </br>
                    <br>
                    </br>
                    <label htmlFor="lastName">Last Name:<br></br></label>
                    <br></br>
                    <input type="text" name="lastName" className="lastName" />
                    <br>
                    </br>
                    <br>
                    </br>
                    <label htmlFor="email">Email:<br></br></label>
                    <br></br>
                    <input type="email" name="message" id="message" className="email" value={message} onChange={handleChange} /><br></br>{error}
                    <br>
                    </br>
                    <br>
                    </br>
                    <label htmlFor="message">Message:<br></br></label>
                    <br>
                    </br>
                    <textarea />
                </div>
                <br>
                </br>
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactMe;