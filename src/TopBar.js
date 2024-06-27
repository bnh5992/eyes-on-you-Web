import React, {useEffect, useState} from 'react';
import './TopBar.css'

const TopBar = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        if (window.electron && window.electron.tobiiJarOutput) {
            window.electron.tobiiJarOutput((output) => {
                setData(output);
            });
        } else {
            setData('웹에서는 동작 안해요');
        }
    }, []);

    return (
        <div className="top-bar">
            <p>
                tobii data: {data}
            </p>
            <button className="top-bar-account-btn"></button>
            <button className="top-bar-notice-btn">
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5002 37.5834C22.3793 37.5834 23.9168 36.0459 23.9168 34.1667H17.0835C17.0835 36.0459 18.6039 37.5834 20.5002 37.5834ZM30.7502 27.3334V18.7917C30.7502 13.5471 27.9485 9.15671 23.0627 7.99504V6.83337C23.0627 5.41546 21.9181 4.27087 20.5002 4.27087C19.0822 4.27087 17.9377 5.41546 17.9377 6.83337V7.99504C13.0347 9.15671 10.2502 13.53 10.2502 18.7917V27.3334L6.8335 30.75V32.4584H34.1668V30.75L30.7502 27.3334Z" fill="white" fill-opacity="0.87"/>
                </svg>
            </button>
        </div>
    );
};

export default TopBar;
