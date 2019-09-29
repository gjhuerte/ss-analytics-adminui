import React, { Component } from 'react';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faIcons,
    faBell,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {
    state = {}
    render() { 
        return (
            <div className="flex flex-row justify-between items-center border-b border-gray-300 p-4">
                <div className="flex-initial flex flex-row">

                    <a 
                        href="/"
                        className="mr-20">
                        <FontAwesomeIcon
                            className="mr-2" 
                            icon={faIcons} />

                        <span className="font-bold text-gray-600">Square Sales</span>
                    </a>
                        
                    <form className="flex flex-row">
                        <button
                            type="button"
                            className="pr-2 text-gray-500">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none text-gray-600" />
                    </form>
                </div>

                <div className="flex-initial flex flex-row justify-between items-center">
                    <button
                        className="text-gray-500 flex flex-row justify-start items-start mr-5"
                        type="button">
                        <FontAwesomeIcon
                            icon={faBell} />

                        <div className="bg-red-600 rounded-full h-2 w-2"></div>
                    </button>

                    <div className="flex flex-row justify-between items-center text-gray-500 mr-5">
                        <img   
                            alt="Profile"
                            src="https://images.pexels.com/photos/1853281/pexels-photo-1853281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            className="object-cover h-8 w-8 rounded-full" />
                        
                        <a 
                            className="flex flex-col px-4"
                            href="/">
                            <span className="text-sm font-bold">
                                Austin Robertson
                            </span>
                            <span className="text-xs">
                                Marketing Administrator
                            </span>
                        </a>

                        <FontAwesomeIcon
                            icon={faCaretDown} />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Navigation;
