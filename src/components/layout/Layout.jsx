import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProjectInfo } from "./../../store/actions/projectActions";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

const Layout = (props) => {
    const { footerInfo, headerInfo } = props.project;

    useEffect(() => {
        props.getProjectInfo();
    }, []);

    return (
        <>
            <Loader />

            <Header headerInfo={headerInfo}/>
                {props.children}
            <Footer footerInfo={footerInfo}/>
        </>
    );
};

const mapStateToProps = ({ projectReducer }) => ({
    project: projectReducer
});

const mapDispatchToProps = {
    getProjectInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
