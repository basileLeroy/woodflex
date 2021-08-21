import React from 'react';
import { HomeCarousel } from "../../components/slideshow";

const Home = () => {
    return (
        <div className="m-auto py-4">
            <HomeCarousel />
            <div className="bg-brown-sand w-full mt-16 px-3 lg:flex content-center">
                <div className="text-brown-dark w-full py-4 lg:py-0 lg:w-1/3 my-auto">
                    <h1 className="text-3xl font-bold text-center">What is Woodflex?</h1>
                </div>
                <div className="text-brown-dark text-center py-4 lg:py-0 lg:text-left w-full lg:w-2/3 lg:my-16 lg:mr-10">
                    here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                    here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                    here is some text to use as a replacement for future text that should be added here instead of this mock text which has no meaning whatsoever!!!!
                </div>

            </div>
            <div className="bg-white w-full mt-16 px-3 flex-row lg:flex-col content-center">
                <div className="text-brown-dark w-full py-4 my-auto content-center">
                    <h1 className="text-3xl font-bold text-center lg:pt-12">What is...</h1>
                </div>
                <div className="w-full my-10 lg:my-16 lg:pb-10 flex flex-col lg:flex-row justify-around">
                    <button className=" transition duration-300 ease-in-out font-bold bg-button-modulariteit hover:bg-white py-2 px-4 mx-0 lg:mx-0 my-4 lg:my-0 rounded w-2/3 lg:w-52 text-white hover:text-button-modulariteit hover:border hover:border-button-modulariteit text-xl">modulair</button>
                    <button className=" transition duration-300 ease-in-out font-bold bg-button-circulariteit hover:bg-white py-2 px-4 mx-8 lg:mx-0 my-4 lg:my-0 rounded w-2/3 lg:w-52 text-white hover:text-button-circulariteit hover:border hover:border-button-circulariteit text-xl">circulair</button>
                    <button className=" transition duration-300 ease-in-out font-bold bg-button-duurzaamheid hover:bg-white py-2 px-4 mx-16 lg:mx-0 my-4 lg:my-0 rounded w-2/3 lg:w-52 text-white hover:text-button-duurzaamheid hover:border hover:border-button-duurzaamheid text-xl">duurzaamheid</button>
                    <button className=" transition duration-300 ease-in-out font-bold bg-button-houtskelet hover:bg-white py-2 px-4 mx-24 lg:mx-0 my-4 lg:my-0 rounded w-2/3 lg:w-52 text-white hover:text-button-houtskelet hover:border hover:border-button-houtskelet text-xl">houtskelet</button>
                </div>

            </div>
            <div className="bg-primary-two w-full mt-16 px-3 flex-row lg:flex-col content-center">
                <div className="text-brown-sand w-full py-4 my-auto content-center">
                    <h1 className="text-3xl font-bold text-center lg:pt-12">Contact & Information</h1>
                </div>
                <div className="w-full my-10 lg:my-16 lg:pb-10 flex flex-col lg:flex-row justify-around">
                    <button className=" transition duration-300 ease-in-out border border-black font-bold bg-button-modulariteit hover:bg-white py-2 px-4 my-4 lg:my-0 rounded lg:w-52 text-white hover:text-button-modulariteit hover:border hover:border-button-modulariteit text-xl">F.A.Q.</button>
                    <button className=" transition duration-300 ease-in-out border border-black font-bold bg-button-circulariteit hover:bg-white py-2 px-4 my-4 lg:my-0 rounded lg:w-52 text-white hover:text-button-circulariteit hover:border hover:border-button-circulariteit text-xl">Download our brochure</button>
                    <button className=" transition duration-300 ease-in-out border border-black font-bold bg-button-duurzaamheid hover:bg-white py-2 px-4 my-4 lg:my-0 rounded lg:w-52 text-white hover:text-button-duurzaamheid hover:border hover:border-button-duurzaamheid text-xl">Contact</button>
                </div>

            </div>
        </div>
    );
};

export { Home };