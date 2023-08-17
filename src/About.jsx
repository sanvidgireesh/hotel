import React from "react";
import Navbar from "./Navbar";
function About()
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
        <img src="http://media-cache-ec0.pinimg.com/736x/65/a3/de/65a3dee01e45a1eb3923c83e22468187.jpg" alt="Los Angeles" className="d-block w-100" height="600" width="700"/>
    </div>
    <div className="carousel-item">
        <img src="http://media-cache-ec0.pinimg.com/736x/7d/c4/cc/7dc4ccbd690ee92e3c557524944d86fe.jpg" alt="Chicago" className="d-block w-100" height="600" width="700"/>
    </div>
    <div className="carousel-item">
        <img src="http://media-cache-ak0.pinimg.com/736x/e5/1e/39/e51e39d3fc4b0fe555cc6f5057379788.jpg" alt="New York" className="d-block w-100" height="600" width="700"/>
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
<h1 className="text-primary">About Us</h1>
<h2 className="text-info">World Hotel</h2>
<div className="card-group">
        <div className="card">
            <div className="card-body bg-white text-dark">
                <p>Lavish bathrooms with upscale features such<br/>
                     as heated floors and soaking tubs. High-end,<br/>
                      lush linens and towels. Deluxe pillows and mattresses so your<br/>
                     sleeping hours are as blissful as your waking<br/>
                      ones. Beautiful views in every direction inside and out.</p>
                      <br/>
                      <p>The rooms of the hotel is spacious<br/>
                         enough to accommodate the guests and their<br/>
                         luggage properly, it is not only <br/>
                         spacious but comfortable with all the necessities<br/>
                          and luxuries like a tiny fridge having chocolates<br/>
                           and champagne, etc. A large T.V with a king-size<br/>
                            bed for comfortable sleep at night.</p>
            </div>
        </div>
       
        <div className="card">
            <div className="card-body bg-white text-dark">
                <p>-*customer review*- I like the aroma of a freshly baked pizza.<br/>
                     The smell of the bread, cheese and vegetables<br/>
                      merged together are worth it when a pizza arrives<br/>
                       out of the oven. I like my pizza with extra cheese<br/>
                        and a thin crust. My favorite toppings are mushroom,<br/>
                         chicken, bell pepper, olives and anchovies.</p>
        </div>
      </div>

        <div className="card">
            <div className="card-body bg-white text-dark">
            <img src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=1320&height=746&fit=crop&format=pjpg&auto=webp" width="500" height="500" ></img>
            </div>
        </div>
    </div>
    <br/>
        </>
    );
}
export default About;