import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offers = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div data-aos={"fade-left"} data-aos-duration={"800"} className="flex-container">
                <p>Here will be a form to ask for offers!..</p>
            </div>
        </>
    );
};

export default Offers;