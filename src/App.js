import React, { Fragment } from 'react';
import styles from './App.css';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Sider from './components/sider/index';
import Content from './pages/content';
import Notfind from './pages/NotFind';
import HooksDemo from './pages/HooksDemo';
import HooksTest from './pages/HooksTest';
import PopupDialogDemo from './pages/PopupDialogDemo';

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
                        <Switch>
                            <Route exact path="/" component= { Home }></Route>
                            <Route exact path="/hooks" component= { HooksDemo }></Route>
                            <Route exact path="/test" component= { HooksTest }></Route>
                            <Route strict exact={true} path="/list" component= { List }></Route>
                            <Route strict exact path="/list/content" component= { Content }></Route>
                            <Route exact path="/popup-dialg" component={ PopupDialogDemo }></Route>
                            <Route component={ Notfind }></Route>
                        </Switch>
                    </div>
                    </Router>
                </div>
            </Fragment>
        );
    }
}

export default App;
