import React from "react";
import Navbar from "./Navbar";
function Form()
{
    return(
        <>
        <Navbar/>
<h1>Student Registration Form</h1>
        <form method="post"/>
        <label for="fname">First Name</label>
        <input type="text" name="fname" placeholder="Enter your first name"/><p>(Max 50 Characters Allowed)</p>
        <br/>
        <label for="lname">Last Name</label>
        <input type="text" name="lname" placeholder="Enter your last name here"/><p>(Max 50 Characters Allowed)</p>
        <br/>
        <label for="EM">Email</label>
            <input type="email" name="EM" placeholder="Enter your email here"/>
            <br/>
        <label for="mob">Mobile Number</label>
        <input type="number" name="mob" placeholder="Enter your mobile number"/><p>(Max 10 Digits Allowed)</p>
        <br/>
        <label for="gen">Gender</label>
        <input type="radio" name="gen"/>male
        <input type="radio" name="gen"/>female
        <br/>
        <label for="dob">Date Of Birth</label>
        <input type="date" name="dob"/>
        <br/>
        <label for="ad">Address</label><br/>
        <textarea name="ad" rows="5" cols="40"></textarea>
        <br/>
        <label for="city">City</label><p>(Max 50 Characters Allowed)</p>
          <select name="city">
            <option>Melbourne</option>
            <option>Sydney</option>
            <option>Perth</option>
            <option>Adelaide</option>
            <option>Brisbane</option>
            <option>Gold Coast</option>
            <option>Newcastle</option>
            <option>Canberra</option>
            <option>Wollongong</option>
            <option>Logan City</option>
            <option>North Shore</option>
            </select>
            <br/>
            <label for="pc">Pin Code</label>
            <input type="number" name="pc" placeholder="Enter your pin code here"/><p>(Max 6 Digits Allowed)</p>
            <br/>
            <label for="state">State</label>
            <select>
            <option>Select your state</option>
            <option>Queensland</option>
            <option>Western Australia</option>
            <option>Northern Territory</option>
            <option>South Australia</option>
            <option>Victoria</option>
            <option>NSW</option>
            <option>Tasmania</option>
            </select>
            <br/><label>Hobbies</label><br/>
            <input type="checkbox"/>Drawing<br/>
            <input type="checkbox"/>Gaming<br/>
            <input type="checkbox"/>Sketching<br/>
            <input type="checkbox"/>Dancing<br/>
            <input type="checkbox"/>Singing<br/>
            <input type="checkbox"/>Other<br/>
            <br/>
            <label>Qualification</label><br/>
            <input type="checkbox"/>High School(10th)<br/>
            <input type="checkbox"/>Higher School(12th)<br/>
            <input type="checkbox"/>Graduration(bachelors)<br/>
            <input type="checkbox"/>Post Graduration(master)<br/>
            <input type="checkbox"/>Phd<br/>
            <br/>
            <label>Course Applied For</label>
            <input type="checkbox"/>B.C.A(Bachelor of Computer Applications)<br/>
            <input type="checkbox"/>B.Com(Bachelor of Commerce)<br/>
            <input type="checkbox"/>B.Sc(Bachelor of Science)<br/>
            <input type="checkbox"/>BA(Bachelor of Arts)<br/>
            <input type="checkbox"/>M.C.A(Master of Computer Applications)<br/>
            <input type="checkbox"/>M.Com(Master of Commerce)<br/>
            <input type="checkbox"/>M.Sc(Master of Science)<br/>
            <input type="checkbox"/>MA(Master of Arts)<br/>
            <br/>
            <input type="submit" value="Submit"/>
            <input type="reset" value="clear"/>
        </>
    );
}
export default Form;