import React, { Component } from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    render(){
        return (
            <div>
            {this.state.date}</div>
        );
    }

}

export default Clock;