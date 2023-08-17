import React from "react";
import Navbar from "./Navbar";
function Home()
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
        <img src="https://www.visitmelbourne.com/-/media/atdw/melbourne/places-to-stay/hotels/f3c35633406e12e2526c695700a9cf76_1600x1200.jpeg?ts=20211222050145" alt="Los Angeles" className="d-block w-100" height="600" width="700"/>
    </div>
    <div className="carousel-item">
        <img src="https://static.independent.co.uk/2023/03/24/09/Best%20New%20York%20boutique%20hotels.jpg?quality=75&width=990&crop=4%3A3%2Csmart&auto=webp" alt="Chicago" className="d-block w-100" height="600" width="700"/>
    </div>
    <div className="carousel-item">
        <img src="https://www.hilton.com/im/en/PPTBNCI/7126564/conrad-bora-bora-nui-activities-1-.jpg?impolicy=crop&cw=4928&ch=2566&gravity=NorthWest&xposition=0&yposition=714&rw=2560&rh=1334" alt="New York" className="d-block w-100" height="600" width="700"/>
    </div>
</div>

<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
</button>
</div>
<br/><br/>
<img src="https://static.propertylogic.net/blog/1448297869/chile_skyline.jpg" />
<div className="card-group">
        <div className="card">
            <div className="card-body bg-white text-dark">
                <h3>Acivities</h3>
                <p>Swimming,climbing, obstacle course,<br/>
                     drawing, canoeing and a lasar tag room </p>
                     <button type="button" class="btn btn-outline-primary">Read more</button>
            </div>
        </div>
       
        <div className="card">
            <div className="card-body bg-white text-dark">
                <h3>Rooms & Rates</h3>
                <p>Jonah Trimy *4.5 stars*<br/>
                    The room is nice and eveything is clean<br/>
                    the service are really kind and the <br/>
                    bed is extremely comfortable<br/>
                </p>
                <p>Klit Leson *3.4 stars*
                    I like the room it was decent but I didn't like<br/>
                     the floor it was pretty messy<br/>
                     but the people were nice and the pillow<br/>
                      was not that soft<br/>
                </p>
                <button type="button" class="btn btn-outline-primary">Read more</button>
        </div>
      </div>

        <div className="card">
            <div className="card-body bg-white text-dark">
                <h3>Location</h3>
                <p>The location of the hotel is queensland<br/>
                     australia near the coastline in brisbane.</p>
                     <button type="button" class="btn btn-outline-primary">Read More</button>
            </div>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
        </>
    );
}
export default Home;