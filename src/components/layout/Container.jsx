import React from 'react';
import { connect } from 'react-redux';

const Container = (props) => {
    return (
        !props.loader.isVisible 
        ?
            <div className={(props.fluid ? `container-fluid` : `container`)}>
                {props.title && <h1 className="text-center my-3">{props.title}</h1>}
                {props.children}
            </div>
        : null
    )
};

const mapStateToProps = ({ loaderReducer }) => ({
    loader: loaderReducer
});

export default connect(mapStateToProps, null)(Container);