import React from "react";
import styles from "./ValueSetter.module.scss";
import ValueSetterInput from "./ValueSetterInput/ValueSetterInput";


class ValueSetter extends React.Component {


    render() {
        return (
            <div className={styles['value-setter']}>
                <ValueSetterInput text={'max-value:'}
                                  onChange={this.props.changeMaxValue}
                                  newMaxValue={this.props.newMaxValue}
                                  newMinValue={this.props.newMinValue}
                                  type={'max'}
                />
                <ValueSetterInput text={'min-value:'}
                                  onChange={this.props.changeMinValue}
                                  newMaxValue={this.props.newMaxValue}
                                  newMinValue={this.props.newMinValue}
                                  type={'min'}
                />
            </div>
        )
    }
}

export default ValueSetter