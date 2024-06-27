import React, {useEffect, useState} from 'react';

const TopBar = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        window.electron.tobiiJarOutput((output) => {
            setData(output);
        });
    }, []);

    return (
        <div className="top-bar">
            tobii data: {data}
        </div>
    );
};

export default TopBar;
