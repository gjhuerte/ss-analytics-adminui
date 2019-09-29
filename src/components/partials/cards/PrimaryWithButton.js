import React, { Component } from 'react';

class PrimaryWithButton extends Component {
    state = {}
    render() { 
        return (
            <div className="bg-blue-500 py-3 px-5 rounded-lg flex flex-col justify-center items-center">
                <div className="flex-1 my-2">
                    <h3 className="text-xs text-blue-300 font-medium">{this.props.label}</h3>
                </div>

                <div className="flex-1 my-1">
                    <h1 className="text-center text-white font-medium">
                        {this.props.description}
                    </h1>
                </div>

                <div className="flex-1 my-2 w-full">
                    <button className="bg-white rounded text-blue-700 font-semibold text-xs py-2 px-5 w-full">
                        {this.props.buttonLabel}
                    </button>
                </div>
            </div>
        );
    }
}
 
export default PrimaryWithButton;
