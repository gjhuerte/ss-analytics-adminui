import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

class DecreaseAmount extends Component {
    state = {}

    render() { 
        return (
            <div className={"flex flex-row justify-center items-center bg-white p-5 rounded " + this.props.className}>
                <div className="m-2 px-2 py-1 bg-red-200 text-red-700 rounded">
                    <FontAwesomeIcon
                        className="font-hairline"
                        icon={faArrowDown} />
                </div>
                
                <div className="flex flex-col">
                    <div className="flex-1 flex flex-row items-baseline">
                        <h3 className="font-bold text-md mr-2">
                            ${this.props.amount}
                        </h3>

                        <div className="text-xs font-bold text-red-500">
                            {this.props.percentage}%
                        </div>
                    </div>

                    <p className="flex-1 text-xs text-gray-700">
                        {this.props.description}
                    </p>
                </div>
            </div>
        );
    }
}
 
export default DecreaseAmount;
