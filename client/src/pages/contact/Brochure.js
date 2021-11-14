import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brochure = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div data-aos={"fade-left"} data-aos-duration={"800"} className="flex-container">
                <p>Brochure information and download button will be displayed here</p>
            </div>
        </>
    );
};

export default Brochure;