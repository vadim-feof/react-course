import React, {Component} from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement () {
        this.setState({
            count: this.state.count - 1
        })
    }


    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <div>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement.bind(this)}>Decrement</button>
                </div>
            </div>
        );
    }
}

export default ClassCounter;