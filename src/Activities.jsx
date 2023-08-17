import React from "react";
import Navbar from "./Navbar";
function Activities()
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
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/328786210.jpg?k=45dd3fa8d20998208b1dd86f9bdc38dc90e9eb8ec08841b0f6da0d9d2f8685b4&o=&hp=1" alt="Los Angeles" className="d-block w-100" height="600" width="700"/>
    </div>
    <div className="carousel-item">
        <img src="https://www.melbournehotel.com.au/uploads/9/8/1/8/98182264/043_6_orig.jpg" alt="Chicago" className="d-block w-100" height="600" width="700"/>
    </div>
    <div className="carousel-item">
        <img src="https://www.alittleofftrack.com/wp-content/uploads/2021/03/20210318-_MG_6690.jpg" alt="New York" className="d-block w-100" height="600" width="700"/>
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
<h1 className="text-primary">Activities</h1>
<p>Our Activities are really fun with lots of thing to do.<br/>
    Try going to the beach or inside activites</p>
    <img src="https://www.beaches.com/blog/content/images/2021/03/Beaches-Land-Sports-Volleyball.jpg" width="400" height="400"></img> <img src="https://www.delphinhotel.com/main_pics/pages/medium/924.png "width="400" height="400"></img>
    <img src="https://plantationbay.com/english/pbayImages/IndoorActivity3.jpg "width="400" height="400"></img> <img src="https://static.wixstatic.com/media/44403f_9d3a2b72c6be4e699139245d3cc7ec34~mv2_d_2000_1328_s_2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/44403f_9d3a2b72c6be4e699139245d3cc7ec34~mv2_d_2000_1328_s_2.jpg"width="400" height="400"></img>
    <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEIKRbLGc9AIjhll3hrjaNXr1OLy16EAvDw&usqp=CAU"width="400" height="400"></img><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSmVuZaXaiN123swnmPUuu2-HCje0rnUFnw&usqp=CAU "width="400" height="400"></img>
    <br/>
        </>
    );
}
export default Activities;