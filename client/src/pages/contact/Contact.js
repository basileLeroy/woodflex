import React, {useEffect, useState} from 'react';
import ContactInfo from "./ContactInfo";
import Offers from "./Offers";
import Brochure from "./Brochure";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [contactInfo, setContactInfo] = useState(true);
    const [offerInfo, setOfferInfo] = useState(false);
    const [brochureInfo, setBrochureInfo] = useState(false);
    const [displayComponent, setDisplayComponent] = useState(<ContactInfo />);

    const changeChoiceDisplay = () => {

        setContactInfo(true);
        setOfferInfo(false);
        setBrochureInfo(false);
        setDisplayComponent(<ContactInfo />);

    };
    const changeGearDisplay = () => {

        setContactInfo(false);
        setOfferInfo(true);
        setBrochureInfo(false);
        setDisplayComponent(<Offers />);
    };

    const changeBrochureDisplay = () => {

        setContactInfo(false);
        setOfferInfo(false);
        setBrochureInfo(true);
        setDisplayComponent(<Brochure />);
    };

    return (
    <>
        <div data-aos={"fade"} data-aos-duration={"500"} className="flex lg:flex-row flex-col w-nine h-12 justify-around mx-auto my-8 lg:px-24">
            <button onClick={changeChoiceDisplay} className={contactInfo ? 'bg-gray-500 text-white lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto' : 'bg-gray-700 lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto hover:bg-gray-500 text-white transition duration-200 ease-in-out'}><p className="my-auto">Contact us</p></ button>
            <button onClick={changeGearDisplay} className={offerInfo ? 'bg-gray-500 text-white lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto' : 'bg-gray-700 lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto hover:bg-gray-500 text-white transition duration-200 ease-in-out'}><p>Request your offer</p></ button>
            <button onClick={changeBrochureDisplay} className={brochureInfo ? 'bg-gray-500 text-white lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto' : 'bg-gray-700 lg:w-1/2 py-3 mx-4 mt-2 rounded-xl text-center my-auto hover:bg-gray-500 text-white transition duration-200 ease-in-out'}><p>Get our brochure</p></ button>
        </div>

        {displayComponent}
    </>
    );
};

export {Contact};