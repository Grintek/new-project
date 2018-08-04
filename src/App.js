import React, { Component } from 'react';
import './style/App.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Calculator from './Calculator';


class Welcome extends Component{
    render(){
        return <div>
            <h1 className="textApp textWelcome">WElCOME</h1>
            <div className="indentation"> </div>
        </div>;
    }
}



class Notes extends Component{
    render(){
        return <h1 className="textApp">Notes</h1>;
    }

}

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <div className="block-button">
                        <ul>
                            <Link className="but_on textButton_top" to="/">Welcome</Link>
                            <Link className="but_on textButton_top" to="/calculator">Calculator</Link>
                            <Link className="but_on textButton_top" to="/notes">Notes</Link>
                        </ul>
                    </div>
                </header>
                <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
                </p>


                  <Route exact path="/" component={Welcome}/>
                  <Route path="/calculator" component={Calculator}/>
                  <Route path="/notes" component={Notes}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
