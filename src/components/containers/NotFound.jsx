import React from 'react';
import notFoundImg from './../../assets/images/404.png';
import Container from "../layout/Container";

const NotFound = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.history.push(`/`)
    };

    return (
        <Container>
            <div className="row">
                <div className="col-12 text-center">
                    <img src={notFoundImg} alt="Not found image"/>
                </div>
                <div className="col-12 text-center">
                    <a onClick={handleClick} className="btn btn-primary text-white">Go to homepage</a>
                </div>
            </div>
        </Container>
    )
};

export default NotFound;