import React from 'react';
import './App.scss';
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";
import ValueSetter from "./components/ValueSetter/ValueSetter";


class App extends React.Component {
    state = {
        value:   0,
        maxValue: 5,
        minValue:  0,
        newMaxValue: 5,
        newMinValue:  0
    }
    componentDidMount() {
        this.restoreState()
    }
    saveState(){
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('our-state', stateAsString);
    }
    restoreState(){
        let state = {   value:   0, maxValue: 5, minValue:  0, newMaxValue: 5,newMinValue:  0  }
        let stateAsString = localStorage.getItem('our-state');
        if(stateAsString != null) {
            state = JSON.parse(stateAsString)
        }
        this.setState({
            ...state
        })
    }
    addValue = () => {
        this.setState(
            {
                value: this.state.value + 1,
            },()=> this.saveState()
        )

    }
    resetValue = () => {
        this.setState({value: this.state.minValue,},()=> this.saveState())

    }
    onChangeMaxValue = (value) => {
        this.setState({newMaxValue: value},()=> this.saveState())

    }
    onChangeMinValue = (value) => {
        this.setState({newMinValue: value},()=> this.saveState())


    }
    setNewValues = () =>{
            this.setState({
            maxValue: this.state.newMaxValue,
            minValue: this.state.newMinValue,
            value:  this.state.newMinValue,
        },()=> this.saveState())

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
