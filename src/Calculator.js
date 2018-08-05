import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: "" , b1: 1, b2: 2, b3: 3, b4: 4, b5: 5,
            b6: 6, b7: 7, b8: 8, b9: 9, b0: 0, clear: "clear", plus: "+",
            minus: "-", divide: "/", multiply: "*", equally: "="
        };
        this.buttonNumb = this.buttonNumb.bind(this);
    }
    buttonNumb(e) {


        if( e === this.state.plus || e === this.state.minus || e === this.state.divide || e === this.state.multiply) {
            let last = this.state.form.slice(-1);

            if ( last !== this.state.plus || last !== this.state.minus || last !== this.state.multiply || last !== this.state.divide) {
                this.setState(prevState => ({
                    form: prevState.form + e
                }));
                console.log(this.state.form.slice(-1));

            }else {
                this.setState(prevState => ({
                    form: prevState.form
                }));
            }
        }

        else if (e === this.state.b1 || e === this.state.b2 || e === this.state.b3 || e === this.state.b4 || e === this.state.b5 || e === this.state.b6 || e === this.state.b7 || e === this.state.b8 || e === this.state.b9 || e === this.state.b0){
            this.setState(prevState => ({
                form: prevState.form + e
            }));
        }



        if (e === this.state.equally && this.state.form !== "") {
            let num = eval(this.state.form);
            this.setState(prevState => ({
                form: prevState.form = num
            }));
        }
        if(e === this.state.clear){
            this.setState(prevState => ({
                form: prevState.form = ""
            }));
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
                            <Button onClick={this.buttonNumb.bind(this, this.state.plus)} variant="contained" color="primary">{ this.state.plus }</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.minus)} variant="contained" color="primary">{ this.state.minus }</Button>
                        </Grid>
                        <Grid item xs={9}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.divide)} variant="contained" color="primary">{ this.state.divide }</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.multiply)} variant="contained" color="primary">{ this.state.multiply }</Button>
                        </Grid>
                        <Grid item xs={9}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.equally)} variant="contained" color="primary">{ this.state.equally }</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.buttonNumb.bind(this, this.state.clear)} variant="contained" color="primary">{ this.state.clear }</Button>
                        </Grid>
                    </Grid>

                </div>
            </div>
        );
    }
}

export default Calculator;