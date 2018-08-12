import React, { Component } from 'react';
import './style/App.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Calculator from './calculator/Calculator';
import Notes from './notes/Notes';

import Button from '@material-ui/core/Button';


function Welcome(){

    return <div>
            <h1 className="textApp textWelcome">WElCOME</h1>
            <div className="indentation"> </div>
        </div>;
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ""
        };

        this.equalityNam = this.equalityNam.bind(this);
    }

    equalityNam(num){
        this.setState(prevState =>  ({value: prevState.value = num}));
        console.log(this.state.value);
    }
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <div className="block-button">
                        <ul>
                            <Link className="but_on textButton_top" to="/">Welcome</Link>
                            <Link className="but_on textButton_top"  to="/calculator">Calculator</Link>
                            <Link className="but_on textButton_top" to="/notes">Notes</Link>
                        </ul>
                    </div>
                    <p className="num_shap">{this.state.value}</p>
                </header>
                <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
                </p>


                  <Route exact path="/" component={Welcome}/>
                  <Route path="/calculator" component={()=><Calculator equalityNam={this.equalityNam.bind(this)}/>}/>
                  <Route path="/notes" component={Notes}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
