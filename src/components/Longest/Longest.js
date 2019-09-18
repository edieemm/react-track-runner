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
        console.log(event.target.value);
        this.setState({
            ...this.state,
            runInfo: {
                ...this.state.runInfo,
                inputValue: event.target.value
            }
        });
    }
    
    updateLongest = (event) => {
        let recentRun = this.state.runInfo.inputValue;
        let longestRun = this.state.displayInfo.longestRun;

        if (longestRun<recentRun){
            longestRun = recentRun;
        }
        
        this.setState({
            ...this.state,
            displayInfo: {
                recentRun: recentRun,
                longestRun: longestRun
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
