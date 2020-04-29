import React from "react";
import styles from "./ValueSetterInput.module.scss";


class ValueSetterInput extends React.Component {
    onChangeValue = (e) => {
        let value = +e.target.value
        this.props.onChange(value)
    }


    render() {
        let error = this.props.newMinValue < 0 || this.props.newMinValue > this.props.newMaxValue;
        return (
            <div className={`${styles['value-setter__input']} ${this.props.className && this.props.className} 
           ${error && styles.error}
           `}>
                <span>{this.props.text}</span>
                <input type="number"
                       onChange={this.onChangeValue}
                       value={this.props.type === 'max' ? this.props.newMaxValue :
                           this.props.type === 'min' ? this.props.newMinValue : 0
                       }
                />
            </div>
        )
    }
}

export default ValueSetterInput