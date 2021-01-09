import React,{ Component } from "react";
import styles from "./index.css";
import cx from "classnames";

class Select extends Component {
    constructor(){
        super();
        this.state = {
            value: '',
            isHidden: true
        };
        this.selectBox = React.createRef();
    }

    componentDidMount(){
        window.addEventListener("click", this.clickOutsideHandler);
    }

    componentWillUnmount(){
        window.removeEventListener("click", this.clickOutsideHandler);
    }

    clickChange = (val) => {
        console.log(val);
        this.setState({
            value: val.label,
            isHidden: true
        });
        this.props.onChange(val);
    }

    onClickHandle = (e) => {
        this.setState({
            isHidden:!this.state.isHidden
        });
    }

    clickOutsideHandler = (e) => {
        if(
            !this.isHidden &&
            !this.selectBox.current.contains(e.target)
        ) {
            this.setState({
                isHidden: true
            });
        }
    }

    render(){
        const { value, isHidden } = this.state;
        const { labelName, placeholder, options } = this.props;
        return (
            <div className={styles.select_box} ref={this.selectBox}>
                {labelName && <label className={styles.select_label}>{labelName}:</label>}
                <div className={styles.select}>
                    <input className={styles.select_input} type="text" value={value} placeholder={placeholder} onClick={this.onClickHandle} readOnly></input>
                    <div 
                        className={styles.select_option}
                        className={cx({
                            [`${styles.select_option}`]: true,
                            [`${styles.hidden_option}`]: isHidden
                        })}
                    >
                        {options && 
                            options.map((item) => {
                                return (
                                    <div 
                                        className={styles.option_item}
                                        onClick={this.clickChange.bind(this,item)} 
                                        key={item.value}
                                    >
                                        {item.label}
                                    </div>
                                );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Select;