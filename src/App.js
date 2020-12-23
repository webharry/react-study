import React, { Fragment } from 'react';
import styles from './App.css';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Sider from './components/sider/index';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render(h) {
        
        return (
            <Fragment>
                <div className={styles.container}>
                   <Router>
                    <Sider/>
                    <div className={styles.content}>
                        <Route path="/home" component= { Home }></Route>
                        <Route path="/list" component= { List }></Route>
                    </div>
                    </Router>
                </div>
            </Fragment>
        );
    }
}

export default App;
