import React from 'react';
import md5 from 'md5';

const Gravatar = ({ name }) => {
    const hashName = md5(name);
    return (
        <img src={`https://www.gravatar.com/avatar/${hashName}?d=identicon`} className=""  alt=""/>
    )
};

export default Gravatar;
