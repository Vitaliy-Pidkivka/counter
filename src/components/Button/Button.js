import React from "react";
import styles from "./Button.module.scss";

class Display extends React.Component {
    render() {
        const {value, onClick, disabled} = this.props
        return (
            <button className={`${styles['default-btn']} ${disabled && styles['disabled']}`}
                    onClick={() => (onClick())}
                    disabled={disabled}>
                {value}
            </button>);
    }
}


export default Display