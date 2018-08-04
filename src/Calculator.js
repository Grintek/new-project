import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: "" , b1: 1, b2: 2, b3: 3, b4: 4, b5: 5,
            b6: 6, b7: 7, b8: 8, b9: 9, b0: 0, clear: "clear", plus: "+",
            minus: "-", divide: "/", multiply: "*", equally: "=", nam_br: null
        };
        this.buttonNumb = this.buttonNumb.bind(this);
    }
    buttonNumb(e) {


        if (e === this.state.equally) {
            let num = eval(this.state.form);
            this.setState(prevState => ({
                form: prevState.form = num
            }));

        } else if (e === this.state.b1 || this.state.b2 || this.state.b3 || this.state.b4 || this.state.b5 || this.state.b6 || this.state.b7 || this.state.b8 || this.state.b9 || this.state.b0){
            this.setState(prevState => ({
                form: prevState.form + e
            }));
        } 


        if(e === this.state.clear){
            this.setState(prevState => ({
                form: prevState.form = ""
            }));
            console.log(this.state.nam_bar);
        }
        console.log(e);

    }

    render(){

        return (
            <div className="cal_block">
                <div className="cal_form">
                    <form>
                        <input className="formCal" type="text" value={ this.state.form }/>
                    </form>
                </div>
                <h1 className="textApp">Calculator</h1>
                <div className="cal_block_button_number">
                    <Grid container spacing={24}>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.b1)}  variant="contained" color="primary">{ this.state.b1 }</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.b2)} variant="contained" color="primary">{ this.state.b2 }</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.b3)} variant="contained" color="primary">{ this.state.b3 }</Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.b4)} variant="contained" color="primary">{ this.state.b4 }</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.b5)} variant="contained" color="primary">{ this.state.b5 }</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.b6)} variant="contained" color="primary">{ this.state.b6 }</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.b7)} variant="contained" color="primary">{ this.state.b7 }</Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.b8)} variant="contained" color="primary">{ this.state.b8 }</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.b9)} variant="contained" color="primary">{ this.state.b9 }</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.b0)} variant="contained" color="primary">{ this.state.b0 }</Button>
                        </Grid>
                    </Grid>

                </div>
                <div className="cal_block_button_manipulation">
                    <Grid container spacing={24}>
                        <Grid item xs={9}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.plus)} variant="contained" color="primary">+</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.minus)} variant="contained" color="primary">-</Button>
                        </Grid>
                        <Grid item xs={9}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.divide)} variant="contained" color="primary">/</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.multiply)} variant="contained" color="primary">*</Button>
                        </Grid>
                        <Grid item xs={9}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.equally)} variant="contained" color="primary">=</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.clear)} variant="contained" color="primary">clear</Button>
                        </Grid>
                    </Grid>

                </div>
            </div>
        );
    }
}

export default Calculator;