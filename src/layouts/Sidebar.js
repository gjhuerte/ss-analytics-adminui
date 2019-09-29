import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faIcons, 
    faChartBar, 
    faStickyNote, 
    faUserFriends, 
    faCaretDown, 
    faDollarSign, 
    faCalendar, 
    faBook, 
    faPhone, 
    faCog, 
    faComment,
} from '@fortawesome/free-solid-svg-icons';

class Sidebar extends Component {
    state = {}
    render() { 
        return (
            <section 
                id="sidebar"
                className="pt-10 pr-20 pl-5 border-r border-gray-300">
                <div className="text-gray-600">
                    <h3 className="font-bold">MAIN</h3>

                    <ul className="flex flex-col">
                        <li className="my-5">
                            <a 
                                href="/">
                                <FontAwesomeIcon
                                    icon={faIcons} 
                                    className="mr-5" />

                                <span className="text-gray-900 font-bold">
                                    Overview
                                </span>
                            </a>
                        </li>
                        <li className="my-5">
                            <a 
                                href="/">
                                <FontAwesomeIcon
                                    icon={faChartBar} 
                                    className="mr-5" />

                                <span className="text-gray-900 font-bold">
                                    Leaderboard
                                </span>
                            </a>
                        </li>
                        <li className="my-5">
                            <a 
                                href="/">
                                <FontAwesomeIcon
                                    icon={faStickyNote} 
                                    className="mr-5" />

                                <span className="text-gray-900 font-bold">
                                    Spreadsheet
                                </span>
                            </a>
                        </li>
                        <li className="my-5">
                            <a 
                                href="/">
                                <FontAwesomeIcon
                                    icon={faUserFriends} 
                                    className="mr-5" />

                                <span className="text-gray-900 font-bold">
                                    Administration
                                </span>
                            </a>
                        </li>
                        <li className="my-5">
                            <a 
                                className="flex flex-row justify-between"
                                href="/">
                                <span>
                                    
                                    <FontAwesomeIcon
                                        icon={faDollarSign} 
                                        className="mr-5" />

                                    <span className="text-gray-900 font-bold mr-5">
                                        Sales
                                    </span>
                                </span>
                                
                                <FontAwesomeIcon
                                    icon={faCaretDown} />
                            </a>
                        </li>
                        <li className="my-5">
                            <a 
                                href="/">
                                <FontAwesomeIcon
                                    icon={faCalendar} 
                                    className="mr-5" />

                                <span className="text-gray-900 font-bold">
                                    Schedule
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            
                <div className="text-gray-600 mt-5">
                    <h3 className="font-bold">Help</h3>

                    <ul className="flex flex-col">
                        <li className="my-5">
                            <a 
                                href="/">
                                <FontAwesomeIcon
                                    icon={faComment}
                                    className="mr-5" />

                                <span className="text-gray-900 font-bold">
                                    Messages
                                </span>
                            </a>
                        </li>
                        <li className="my-5">
                            <a 
                                href="/">
                                <FontAwesomeIcon
                                    icon={faBook} 
                                    className="mr-5" />

                                <span className="text-gray-900 font-bold">
                                    Library
                                </span>
                            </a>
                        </li>
                        <li className="my-5">
                            <a 
                                href="/">
                                <FontAwesomeIcon
                                    icon={faCog} 
                                    className="mr-5" />

                                <span className="text-gray-900 font-bold">
                                    Settings
                                </span>
                            </a>
                        </li>
                        <li className="my-5">
                            <a 
                                href="/">
                                <FontAwesomeIcon
                                    icon={faPhone} 
                                    className="mr-5" />

                                <span className="text-gray-900 font-bold">
                                    Support
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
 
export default Sidebar;
