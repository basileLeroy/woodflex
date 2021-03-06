import React, {useEffect} from 'react';
import banner from "../../../assets/images/Modular_building_NOTSAFE.jpg";
import modular from "../../../assets/images/modular-construction.jpg";
import {TitleAnimation} from "../../../components/animations/TitleAnimation";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Modular = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const animatedTitle = "Header Right Here!!";
    return (
        <div data-aos={"fade"} data-aos-duration={"500"} className="flex-container w-full flex flex-col">
            <div className="banner-Img w-full">
                <img src={banner} alt="" className="object-cover h-48 w-full"/>
            </div>
            <div className="component flex flex-col">
                <div className="bg-brown-sand w-full mt-16 px-3 lg:flex content-center">
                    <div className="text-white w-full py-4 lg:py-0 lg:w-2/3 my-auto relative">
                        <img src={modular} alt="" />
                        <h1 className="text-6xl font-bold text-center absolute inset-0 top-1/3">Modular.</h1>
                    </div>
                    <div className="text-brown-dark text-center py-4 lg:py-0 lg:text-left w-full lg:w-1/3 lg:my-16 mx-10">
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                    </div>
                </div>

                <div className="mt-32">
                    <TitleAnimation title={animatedTitle} />
                </div>

                <div className="mt-16 w-full px-3 flex flex-col">
                    <div className="text-box flex justify-end">
                        <span className="shadow-2xl rounded-md lg:w-2/5 p-8 m-12">
                            here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                            here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                            here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        </span>
                    </div>
                    <div className="text-box flex justify-left">
                        <span className="shadow-2xl rounded-md lg:w-2/5 p-8 m-12">
                            here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                            here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                            here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        </span>
                    </div>
                    <div className="text-box flex justify-center">
                        <span className="shadow-2xl rounded-md lg:w-2/5 p-8 m-12">
                            here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                            here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                            here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Modular};