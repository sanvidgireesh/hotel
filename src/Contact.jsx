import React from "react";
import Navbar from "./Navbar";
function Contact()
{
    return(
        <>
        <Navbar/>
    <h1 className="text-primary">Contact</h1>
    <p>Type you conacts here if you would like to visit our hotel.</p>
    <form method="post"/>
        <label for="fname"></label>
        <input type="text" name="fname" placeholder="Enter your first name"/>
        <br/>
        <label for="EM"></label>
        <br/>
            <input type="email" name="EM" placeholder="Enter your email here"/>
            <br/>
            <br/>
            <label for="SUB"></label>
            <input type="text" name="SUB" placeholder="Enter your subject here"/>
            <br/>
            <label for="ad"></label><br/>
        <textarea name="ad" rows="5" cols="40"></textarea>
        <br/>
        <br/>
        </>
    );
}
export default Contact;