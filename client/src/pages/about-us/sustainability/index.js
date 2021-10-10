import React from 'react';
import banner from "../../../assets/images/sustainable.jpg";
import image from "../../../assets/images/sustainable_city.jpg";

const Sustainability = () => {
    return (
        <div className="flex-container w-full flex flex-col">
            <div className="banner-Img w-full">
                <img src={banner} alt="" className="object-cover h-48 w-full"/>
            </div>
            <div className="component flex flex-col">
                <h1>Sustainability</h1>
                <div className="bg-brown-sand w-full mt-16 px-3 lg:flex content-center">
                    <div className="text-white w-full py-4 lg:py-0 lg:w-2/3 my-auto relative">
                        <img src={image} alt="" />
                        <h1 className="text-6xl font-bold text-center absolute inset-0 top-1/3">Sustainability.</h1>
                    </div>
                    <div className="text-brown-dark text-center py-4 lg:py-0 lg:text-left w-full lg:w-1/3 lg:my-16 mx-10">
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                    </div>
                </div>
                <div className="bg-brown-sand w-full mt-16 px-3 lg:flex content-center">
                    <div className="text-white w-full py-4 lg:py-0 lg:w-2/3 my-auto relative">
                        <img src={image} alt="" />
                        <h1 className="text-6xl font-bold text-center absolute inset-0 top-1/3">Sustainability.</h1>
                    </div>
                    <div className="text-brown-dark text-center py-4 lg:py-0 lg:text-left w-full lg:w-1/3 lg:my-16 mx-10">
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                    </div>
                </div>
                <div className="bg-brown-sand w-full mt-16 px-3 lg:flex content-center">
                    <div className="text-white w-full py-4 lg:py-0 lg:w-2/3 my-auto relative">
                        <img src={image} alt="" />
                        <h1 className="text-6xl font-bold text-center absolute inset-0 top-1/3">Sustainability.</h1>
                    </div>
                    <div className="text-brown-dark text-center py-4 lg:py-0 lg:text-left w-full lg:w-1/3 lg:my-16 mx-10">
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Sustainability};