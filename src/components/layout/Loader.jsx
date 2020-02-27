import React from 'react';
import { connect } from 'react-redux';
import './../../assets/styles/components/Loader.scss';

const Loader = (props) => {
    return (
        props.loader.isVisible ?
            <div className="lds-roller">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        : null
    );
};

const mapStateToProps = ({ loaderReducer }) => ({
    loader: loaderReducer
});

export default connect(mapStateToProps, null)(Loader);