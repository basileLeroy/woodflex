import React from 'react';
import { GrMapLocation, GrPhone, GrMailOption } from "react-icons/gr";
import {Link} from "react-router-dom";

const ContactInfo = () => {

    return (
        <>
            <div className="flex-container">
                <div className="component flex lg:flex-row flex-col">
                    <div className="general-info p-4 w-full lg:w-1/3 h-auto bg-brown-sand">
                        <h1>CONTACT</h1>
                        <div className="contact-card flex flex-col">
                            <div className="contact-item w-full flex flex-wrap justify-between">
                                <GrPhone size={60} style={{margin:0, display: 'inline-block'}} />
                                <p>tel: (+32) 456 78 90</p>
                            </div>
                            <div className="contact-item w-full flex flex-wrap justify-between">
                                <GrMailOption size={60} style={{margin:0, display: 'inline-block'}} />
                                <p>email: <a href='mailto:info@woodflex.com'>info@woodflex.com</a></p>
                            </div>
                            <div className="contact-item w-full flex flex-wrap justify-between">
                                <GrMapLocation size={60} style={{margin:0, display: 'inline-block'}} />
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.940291882634!2d3.7212237156393058!3d51.05419027956328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c37146f023fafb%3A0x155761ea40a108bf!2sKlein%20Turkije%202a%2C%209000%20Gent!5e0!3m2!1sen!2sbe!4v1632043562937!5m2!1sen!2sbe"
                                    width="300"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <form className=" p-4 w-full lg:w-2/3 h-auto">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name" type="text" placeholder="Jane" />
                                <p className="text-red-500 text-xs italic">Please fill out this field.</p>

                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="grid-password">
                                    E-mail
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="email" type="email" />
                                <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="grid-password">
                                    Message
                                </label>
                                <textarea
                                    className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                    id="message"></textarea>
                                <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none /
                                    resize-y / resize-x / resize</p>
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                                <button
                                    className="cursor-not-allowed shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                    type="button" disabled>
                                    Send
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
                <div className="component"></div>
            </div>
        </>
    )
}

export default ContactInfo;