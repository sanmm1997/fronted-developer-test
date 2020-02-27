import React from 'react';
import notFoundImg from './../../assets/images/notFound.png';
import Container from "../layout/Container";

const NotFound = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.history.push(`/`)
    };

    return (
        <Container>
            <div className="row">
                <div className="col text-center">
                    <img src={notFoundImg} alt="Not found image"/>
                    <a onClick={handleClick} className="btn btn-primary text-white">Go to homepage</a>
                </div>
            </div>
        </Container>
    )
};

export default NotFound;