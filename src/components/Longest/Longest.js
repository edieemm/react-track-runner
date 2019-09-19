import React, { Component } from 'react';

class Longest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            runInfo: {
                inputValue: '',
                recentRun: 0,
                longestRun: 0
            },
            displayInfo: {
                recentRun: 0,
                longestRun: 0
            }
        };
    };

    handleInputChange = (event) => {
        this.setState({
            ...this.state,
            runInfo: {
                ...this.state.runInfo,
                inputValue: event.target.value
            }
        });
    }

    checkForLongest = (recent, longest) => {
        if (parseFloat(recent) > parseFloat(longest)){
            return recent;
        } else {
            return longest;
        }
    }
    
    updateLongest = (event) => {
        this.setState({
            ...this.state,
            displayInfo: {
                recentRun: this.state.runInfo.inputValue,
                longestRun: this.checkForLongest(this.state.runInfo.inputValue, this.state.displayInfo.longestRun,)
            }
        });
    }

    render (){
        return (
        <div>
            <input placeholder="Miles Ran" onChange={this.handleInputChange}/>
            <button onClick={this.updateLongest}>Add New Run</button>
            <p>{this.state.inputValue}</p>
            <p>Recent Run: {this.state.displayInfo.recentRun}</p>
            <p>Longest Run: {this.state.displayInfo.longestRun}</p>
        </div>
        );
    }
}

export default Longest;
