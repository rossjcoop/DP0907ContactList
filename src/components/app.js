import React, { Component } from 'react'
import '../styles/app.css'
import ContactList from './contactlist'
import ContactView from './contactview'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <Router>
        <Provider store={store}> 
          <div>    
            <Switch>
              <Route exact path="/" component={ContactList} />
              <Route path="/:id" component={ContactView} />     
            </Switch> 
          </div>      
        </Provider>
      </Router>
    );
  }
}

export default App;
