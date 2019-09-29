import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import IncreaseAmount from './partials/cards/IncreaseAmount';
import DecreaseAmount from './partials/cards/DecreaseAmount';
import PrimaryWithButton from './partials/cards/PrimaryWithButton';

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
                                        <span className="ml-2">Download</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-row justify-center items-center my-5">
                                <IncreaseAmount
                                    amount="6,726"
                                    percentage="2.5"
                                    description="Income in this Period"
                                    className="mr-3" />
                                <IncreaseAmount
                                    amount="3,966"
                                    percentage="2.5"
                                    description="Expenses in this Period"
                                    className="mr-3" />
                                <DecreaseAmount
                                    amount="28,019"
                                    percentage="1.5"
                                    description="Total Visitor in this Period"
                                    className="mr-3" />
                                <IncreaseAmount
                                    amount="10,918"
                                    percentage="2.5"
                                    description="New Customer in this Period" />
                            </div>
                            <div className="flex-1 flex flex-row justify-between">
                                <div className="flex-1 w-2/3 bg-white mr-4 h-full">
                                    <div className="bg-white h-full rounded"></div>
                                </div>

                                <div className="flex-1 w-1/3">
                                    <PrimaryWithButton
                                        label="BECOME A MEMBER"
                                        description="Get Access to Unlock All Features for One Year"
                                        buttonLabel="GO UNLIMITED FOR $99" />

                                    <div className="bg-white h-full rounded mt-2">

                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-row">

                            </div>
                        </div>
                    </div>
                </div>
            </BaseLayout>
        );
    }
}
 
export default Dashboard;
