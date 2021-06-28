import React from 'react';
import  { Link } from 'react-router-dom';
import styles from './style.css';

class Sider extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={styles.sidebar}>
                <ul>
                    <li>
                        <Link to="/">home页面</Link>
                    </li>
                    <li>
                        <Link to="/list">list页面</Link>
                    </li>
                    <li>
                        <Link to="/list/content">内容页面</Link>
                    </li>
                    <li>
                        <Link to="/popup-dialg">popupDialog弹窗</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sider;