import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends Component {
    state = {}
    render() { 
        return (
            <BaseLayout>
                <div className="bg-gray-100 w-full h-full">
                    <div className="p-5">
                        <div className="mx-5 flex flex-col">
                            <div className="flex-1 flex flex-row justify-between items-center">
                                <h1 className="text-lg font-bold">
                                    Administration
                                </h1>

                                <div>
                                    <button
                                        type="button"
                                        className="text-white bg-blue-500 px-6 py-2 rounded-lg text-xs mx-1 font-medium">
                                        1 year
                                    </button>
                                    <button
                                        type="button"
                                        className="text-gray-900 bg-white px-6 py-2 rounded-lg text-xs mx-1 font-medium">
                                        3 years
                                    </button>
                                    <button
                                        type="button"
                                        className="text-gray-900 bg-white px-6 py-2 rounded-lg text-xs mx-1 font-medium">
                                        5 years
                                    </button>
                                    <button
                                        type="button"
                                        className="text-white bg-blue-500 px-6 py-2 rounded-lg text-xs ml-5 font-medium">
                                        <FontAwesomeIcon
                                            icon={faDownload} />
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseLayout>
        );
    }
}
 
export default Dashboard;
