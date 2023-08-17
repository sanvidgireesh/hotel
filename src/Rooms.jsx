import React from "react";
import Navbar from "./Navbar";
function Rooms()
{
    return(
        <>
        <Navbar/>
    <div id="demo" className="carousel slide" data-bs-ride="carousel">

<div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div className="carousel-inner">
    <div className="carousel-item active">
        <img src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg" alt="Los Angeles" className="d-block w-100" height="600" width="700"/>
    </div>
    <div className="carousel-item">
        <img src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/628d35d6b9575f5b35b4231a_Twin%20Hotel%20Room%20(1)%20(1).jpg" alt="Chicago" className="d-block w-100" height="600" width="700"/>
    </div>
    <div className="carousel-item">
        <img src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/628d35e739bf0b59fac62a8d_Hotel%20Room%20with%20a%20View%20(1)%20(1)%20(1).jpg" alt="New York" className="d-block w-100" height="600" width="700"/>
    </div>
</div>

<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
</button>
</div>
<br/>
<h1 className="text-primary">Rooms & Rates</h1>
<div className="card">
            <div className="card">
            <div className="card-body bg-white text-dark">
                <img src="https://s3.amazonaws.com/static-webstudio-accorhotels-usa-1.wp-ha.fastbooking.com/wp-content/uploads/sites/19/2022/01/06193833/DUF_4113-v-ok-1-1170x780.jpg" width="500" height="500"></img>
            </div>   
            </div>    
            <div className="card">
        <div className="card-body bg-white text-dark">
                <h2>Junior Suite</h2>
                <p>Our Junior Suites offer breathtaking views of the city skyline.</p>
                <p>Size: 260 sq ft<br/>
                   Beds: 2 Double(s) </p>
                   </div>
            </div>
            <div className="card">
                    <div className="card-body bg-white text-dark">
                        <h3>Price</h3>
                        <h2>From $176</h2>
                    <p></p>
                    <button type="button" class="btn btn-primary">More Info</button>
                </div>
                </div>
</div>
<br/>
<div className="card">
            <div className="card">
            <div className="card-body bg-white text-dark">
                <img src="https://pacifichotelcairns.com.au/wp-content/uploads/2022/09/Standard-Room_Pacific-Hotel-Cairns-1-scaled.jpg" width="500" height="500"></img>
            </div>   
            </div>    
            <div className="card">
        <div className="card-body bg-white text-dark">
                <h2>Standard Rooms</h2>
                <p>Our Standard Rooms are the perfect combination of function and comfort.</p>
                <p>Size: 230 sq ft<br/>
                   Beds: 1 Double(s) </p>
                   </div>
            </div>
            <div className="card">
                    <div className="card-body bg-white text-dark">
                        <h3>Price</h3>
                        <h2>From $234</h2>
                    <button type="button" class="btn btn-primary">More Info</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Rooms;