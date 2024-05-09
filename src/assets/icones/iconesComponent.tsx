
import icons from './Icon.json';

export const Icon = ({ name, estilo }) => {
    const iconSvg = icons[name];
    return <div className={estilo} dangerouslySetInnerHTML={{ __html: iconSvg }} />;
};

