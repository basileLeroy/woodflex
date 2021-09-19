import React from 'react';
import banner from '../../../assets/images/circulair-img_NOTSAFE.jpg'
import circulair from '../../../assets/images/circulair_01.jpg'

const Circular = () => {
    return (
        <div className="flex-container w-full flex flex-col">
            <div className="banner-Img w-full">
                <img src={banner} alt="" className="object-cover h-48 w-full"/>
            </div>
            <div className="component">
                <h1>Circular</h1>
                <div className="bg-brown-sand w-full mt-16 px-3 lg:flex content-center">
                    <div className="text-brown-dark w-full py-4 lg:py-0 lg:w-2/3 my-auto">
                        <img src={circulair} alt=""/>
                        <h1 className="text-3xl font-bold text-center">Circulair.</h1>
                    </div>
                    <div className="text-brown-dark text-center py-4 lg:py-0 lg:text-left w-full lg:w-1/3 lg:my-16 lg:mr-10">
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                        here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                    </div>

                </div>
            </div>
        </div>
    );
};

export {Circular};