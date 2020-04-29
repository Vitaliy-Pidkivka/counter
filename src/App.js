import React from 'react';
import './App.scss';
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";
import ValueSetter from "./components/ValueSetter/ValueSetter";


class App extends React.Component {
    state = {
        value: +localStorage.getItem('newMinValue') ||  0,
        maxValue: +localStorage.getItem('newMaxValue') || 5,
        minValue: +localStorage.getItem('newMinValue') || 0,
        newMaxValue:+localStorage.getItem('newMaxValue') || 5,
        newMinValue: +localStorage.getItem('newMinValue') || 0
    }
    addValue = () => {
        this.setState(
            {
                value: this.state.value + 1,
            }
        )
    }
    resetValue = () => {
        this.setState({value: this.state.minValue,})
    }
    onChangeMaxValue = (value) => {
        this.setState({newMaxValue: value})
    }
    onChangeMinValue = (value) => {
        this.setState({newMinValue: value})
    }
    setNewValues = () =>{
        localStorage.setItem('newMaxValue' , this.state.newMaxValue.toString())
        localStorage.setItem('newMinValue' , this.state.newMinValue.toString())
        let max = +localStorage.getItem('newMaxValue')
        let min = +localStorage.getItem('newMinValue')
            this.setState({
            maxValue: max,
            minValue: min,
            value: min,
        })
        // this.setState({
        //     maxValue: this.state.newMaxValue,
        //     minValue: this.state.newMinValue,
        //     value: this.state.newMinValue,
        // })
    }
    render = () => {
        let error = this.state.newMinValue < 0 || this.state.newMinValue > this.state.newMaxValue;
        return (
            <div className="App">
                <div>
                    <ValueSetter value={this.state.value}
                                 minValue={this.state.minValue}
                                 maxValue={this.state.maxValue}
                                 newMaxValue={this.state.newMaxValue}
                                 newMinValue={this.state.newMinValue}
                                 changeMinValue={this.onChangeMinValue}
                                 changeMaxValue={this.onChangeMaxValue}
                    />

                    <Button disabled={error}
                            value={'set'}
                            onClick={this.setNewValues}
                    />
                </div>
                <div>
                    <Display value={this.state.value}
                             maxValue={this.state.maxValue}
                             maxClass={this.state.value === this.state.maxValue}
                    />
                    <div className="buttons">
                        <Button disabled={this.state.value >= this.state.maxValue}
                                onClick={this.addValue}
                                value={'inc'}
                        />
                        <Button disabled={this.state.value === this.state.minValue}
                                onClick={this.resetValue}
                                value={'reset'}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
