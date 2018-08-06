import React, { Component } from 'react';
import './style/App.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Calculator from './Calculator';
import Button from '@material-ui/core/Button';


class Welcome extends Component{
    render(){
        return <div>
            <h1 className="textApp textWelcome">WElCOME</h1>
            <div className="indentation"> </div>
        </div>;
    }
}



class Notes extends Component{
    constructor(props){
        super(props);

        this.state = {
            block: [], number: 0
        };
        this.buttonCreateNotes = this.buttonCreateNotes.bind(this)
    }

    buttonCreateNotes(){

        this.setState(prevState => ({
            number: prevState.number + 1
        }));
        for(let i = 0; i >= this.state.number; i++) {
            this.setState(prevState => ({
                block: prevState.block = [i]
            }));
        }
        console.log(this.state.number);
        console.log(this.state.block)

    }
    render(){
        return (

            <div>
                <h1 className="textApp">Notes</h1>
                <div>{this.state.block.map((num) => <div key={num}>Fak</div>)}</div>

                <button  className="create_notes"  onClick={this.buttonCreateNotes}>+</button>
            </div>

        );
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
