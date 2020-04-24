import React from 'react';
import './App.scss';
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";


class App extends React.Component {
    state = {
        value: 0,
        maxValue: 5,
    }
    addValue = () => {
        this.setState(
            {
                value: this.state.value + 1,
            }
        )
    }
    resetValue = () => {
        this.setState({
            value: 0,
        })
    }
    render = () =>
        <div className="App">
            <Display value={this.state.value}
                     maxValue={this.state.maxValue}
                     maxClass={this.state.value === this.state.maxValue}
            />
            <div>
                <Button disabled={this.state.value === this.state.maxValue}
                        onClick={this.addValue}
                        value={'inc'}
                />
                <Button disabled={!(this.state.value)}
                        onClick={this.resetValue}
                        value={'reset'}
                />
            </div>
        </div>
}

export default App;
