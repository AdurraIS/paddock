
import icons from './Icon.json';

export const Icon = ({ name }) => {
    const iconSvg = icons[name];
    return <div dangerouslySetInnerHTML={{ __html: iconSvg }} />;
};

