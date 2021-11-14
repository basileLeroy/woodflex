import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Approach = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div data-aos={"fade"} data-aos-duration={"500"}>
            <h1>Our approach</h1>
        </div>
    );
};

export {Approach};