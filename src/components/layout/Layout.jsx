import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProjectInfo } from "./../../store/actions/projectActions";

import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    const { footerInfo, headerInfo } = props.project;

    useEffect(() => {
        props.getProjectInfo();
    }, []);

    return (
        <>
            <Header headerInfo={headerInfo}/>
                <div className="container">{props.children}</div>
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
