import React from 'react';
import { HomeCarousel } from "../../components/slideshow";

const Home = () => {
    return (
        <div className="m-auto py-4">
            <HomeCarousel />
            <div className="bg-brown-sand w-full mt-16 px-3 flex content-center">
                <div className="text-brown-dark w-1/3 my-auto">
                    <h1 className="text-3xl font-bold text-center">What is Woodflex?</h1>
                </div>
                <div className="text-brown-dark w-2/3 my-16 mr-10   ">
                    here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                    here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                    here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                </div>

            </div>
            <div className="bg-white w-full mt-16 px-3 flex flex-col content-center">
                <div className="text-brown-dark w-full my-auto">
                    <h1 className="text-3xl font-bold text-center">What is...</h1>
                </div>
                <div className="w-full my-16 flex justify-around">
                    <button className="font-bold bg-button-modulariteit hover:bg-white py-2 px-4 rounded lg:w-52 text-white hover:text-button-modulariteit hover:border hover:border-button-modulariteit text-xl">modulair</button>
                    <button className="font-bold bg-button-circulariteit hover:bg-white py-2 px-4 rounded lg:w-52 text-white hover:text-button-circulariteit hover:border hover:border-button-circulariteit text-xl">circulair</button>
                    <button className="font-bold bg-button-duurzaamheid hover:bg-white py-2 px-4 rounded lg:w-52 text-white hover:text-button-duurzaamheid hover:border hover:border-button-duurzaamheid text-xl">duurzaamheid</button>
                    <button className="font-bold bg-button-houtskelet hover:bg-white py-2 px-4 rounded lg:w-52 text-white hover:text-button-houtskelet hover:border hover:border-button-houtskelet text-xl">houtskelet</button>
                </div>

            </div>
        </div>
    );
};

export { Home };