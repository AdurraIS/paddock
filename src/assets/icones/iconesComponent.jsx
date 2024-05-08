import React from 'react';
import icons from './Icon.json';

const Icon = ({ name }) => {
    const iconSvg = icons[name];
    return <div dangerouslySetInnerHTML={{ __html: iconSvg }} />;
};

export default Icon;
