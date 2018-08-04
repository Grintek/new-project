import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: "" , b1: "1", b2: 2, b3: 3, b4: 4, b5: 5,
            b6: 6, b7: 7, b8: 8, b9: 9, b0: 0, clear: "clear", plus: "+",
            minus: "-", divide: "/", multiply: "*", equally: "=", nam_br: null
        };
        this.buttonNumb = this.buttonNumb.bind(this);
    }
    buttonNumb(e){

        this.setState(prevState => ({
            form: prevState.form + e
        }));
        if(e === this.state.clear){
            this.setState(prevState => ({
                form: prevState.form = ""
            }));
        }
        if(e === this.state.plus){
            let num = parseInt(this.state.form, 10);

            this.state.nam_br = num;
            console.log(this.state.nambr);
        }


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