import React from "react";
import styles from "./Display.module.scss";

const Display = (props) => {
    return (
        <div className={`${styles.display}  ${props.maxClass && styles['max']}`}> {props.value}</div>
    )
}

export default Display