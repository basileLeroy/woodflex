import React from 'react';
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-primary-one p-6 fixed w-full z-10 top-0">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <NavLink tag={Link} exact to="/">
                    <span className="text-3xl pl-2"><i className="em em-grinning">Woodflex</i></span>
                </NavLink>
                <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                </a>
            </div>

            <div className="block lg:hidden">
                <button id="nav-toggle"
                        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>

            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
                 id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li>
                        <div className="group inline-block">
                            <button
                                className="outline-none focus:outline-none px-3 py-1 text-white rounded-sm flex items-center min-w-32"
                            >
                                <span className="pr-1 pb-4 font-semibold flex-1">About us</span>
                                <span className="pb-4">
                                    <svg
                                        className="fill-current h-4 w-4 transform group-hover:-rotate-180
                                    transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                    </svg>
                                </span>
                            </button>
                            <ul
                                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute
                                            transition duration-150 ease-in-out origin-top min-w-32"
                            >
                                <NavLink tag={Link} exact activeClassName="underline" to="/about-us/circular">
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Circulair</li>
                                </NavLink>
                                <NavLink tag={Link} exact activeClassName="underline" to="/about-us/modular">
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Modulair</li>
                                </NavLink>
                                <NavLink tag={Link} exact activeClassName="underline" to="/about-us/our-approach">
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Our approach</li>
                                </NavLink>
                                <NavLink tag={Link} exact activeClassName="underline" to="/about-us/sustainability">
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Sustainability</li>
                                </NavLink>
                                <NavLink tag={Link} exact activeClassName="underline" to="/about-us/timber-structure">
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Timber structures</li>
                                </NavLink>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="group inline-block">
                            <button
                                className="outline-none focus:outline-none px-3 py-1 text-white rounded-sm flex items-center min-w-32"
                            >
                                <span className="pr-1 pb-4 font-semibold flex-1">Services</span>
                                <span className="pb-4">
                                    <svg
                                        className="fill-current h-4 w-4 transform group-hover:-rotate-180
                                    transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                    </svg>
                                </span>
                            </button>
                            <ul
                                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute
transition duration-150 ease-in-out origin-top min-w-32"
                            >
                                <NavLink tag={Link} exact activeClassName="underline" to="/services/construction">
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Construction</li>
                                </NavLink>
                                <NavLink tag={Link} exact activeClassName="underline" to="/services/expanding">
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Expanding</li>
                                </NavLink>
                                <NavLink tag={Link} exact activeClassName="underline" to="/services/facades">
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Facades</li>
                                </NavLink>
                                <NavLink tag={Link} exact activeClassName="underline" to="/services/renovations">
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Renovations</li>
                                </NavLink>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="group inline-block">
                            <NavLink tag={Link} className="outline-none focus:outline-none px-3 py-1 text-white rounded-sm flex items-center" exact activeClassName=" border-b-4 border-fuchsia-600" to="/projects">
                                <span className="pr-1 pb-4 font-semibold flex-1">Projects</span>
                            </NavLink>

                        </div>
                    </li>
                    <li>
                        <div className="group inline-block">
                            <NavLink tag={Link} className="outline-none focus:outline-none px-3 py-1 text-white rounded-sm flex items-center" exact activeClassName=" border-b-4 border-fuchsia-600" to="/blog">
                                <span className="pr-1 pb-4 font-semibold flex-1">Blog</span>
                            </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className="group inline-block">
                            <NavLink tag={Link} className="outline-none focus:outline-none px-3 py-1 text-white rounded-sm flex items-center" exact activeClassName=" border-b-4 border-fuchsia-600" to="/faq">
                                <span className="pr-1 pb-4 font-semibold flex-1">F.A.Q.</span>
                            </NavLink>
                        </div>
                    </li>
                    <li className="ml-24">
                        <div className="group inline-block">
                            <NavLink tag={Link} className="outline-none focus:outline-none px-3 py-1 text-white rounded-sm flex items-center min-w-32" exact activeClassName=" border-b-4 border-fuchsia-600" to="/contact">
                                <span className="pr-1 pb-4 font-semibold flex-1">Contact</span>
                            </NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export {Navigation};