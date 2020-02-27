import React from 'react';

const Container = (props) => {
    return (
        <div className={(props.fluid ? `container-fluid` : `container`)}>
            {props.title && <h1 className="text-center my-3">{props.title}</h1>}
            {props.children}
        </div>
    )
};

export default Container;