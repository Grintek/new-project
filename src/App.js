import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class Welcome extends Component{
    render(){
        return <div>
            <h1 className="textApp textWelcome">WElCOME</h1>
            <div className="indentation"> </div>
        </div>;
    }
}

class Calculator extends Component{
    render(){
        return (
            <div className="cal_block">
                <div className="cal_form">

                </div>
            <h1 className="textApp">Calculator</h1>
                <div className="cal_block_button_number">
                    <Grid container spacing={24}>
                    <Grid item xs={2}>
                    <Button variant="contained" color="primary">1</Button>
                    </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained" color="primary">2</Button>
                    </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained" color="primary">3</Button>
                    </Grid>
                    <Grid item xs={5}>
                    <Button variant="contained" color="primary">4</Button>
                    </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained" color="primary">5</Button>
                    </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained" color="primary">6</Button>
                    </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained" color="primary">7</Button>
                    </Grid>
                    <Grid item xs={5}>
                    <Button variant="contained" color="primary">8</Button>
                    </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained" color="primary">9</Button>
                    </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained" color="primary">0</Button>
                    </Grid>
                    </Grid>

                </div>
                <div className="cal_block_button_manipulation">
                    <Grid container spacing={24}>
                    <Grid item xs={9}>
                        <Button variant="contained" color="primary">+</Button>
                    </Grid>
                     <Grid item xs={2}>
                        <Button variant="contained" color="primary">-</Button>
                    </Grid>
                     <Grid item xs={9}>
                        <Button variant="contained" color="primary">/</Button>
                    </Grid>
                     <Grid item xs={2}>
                        <Button variant="contained" color="primary">*</Button>
                    </Grid>
                     <Grid item xs={2}>
                        <Button variant="contained" color="primary">=</Button>
                    </Grid>
                    </Grid>

                </div>
            </div>
        );
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
