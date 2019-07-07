import React from "react";

const Carousel = () => {
    return (
        <div id="slides" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="images/bench20.jpg" className="img-fluid" />
                <div className="carousel-caption">
                    <h1 className="display-2">Jagdakademie</h1>
                    <h3>Wissen ist Macht</h3>
                    <button type="button" className="btn btn-outline-light btn-lg">VIEW DEMO</button>
                    <button type="button" className="btn btn-primary btn-lg">Get Started</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;