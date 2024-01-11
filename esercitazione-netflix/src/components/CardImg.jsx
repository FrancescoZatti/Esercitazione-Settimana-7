import React from "react";
import { CarouselItem, Col } from "react-bootstrap";

const CardImg = ({movies}) => {
    let imgStyle = {
        height: "250px",
        width: "180px",
      };

    return (
        <div className="d-flex">
            {movies.map((movie) => 
                <Col className="mb-2 px-1">
                    <img className="img" style={imgStyle} src={movie} alt="movie picture" />
                </Col>
            )}
        </div>
    );
}

export default CardImg;