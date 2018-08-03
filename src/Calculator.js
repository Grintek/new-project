import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = { form: "" , b1: 1, b2: 2, b3: 3, b4: 4, b5: 5, b6: 6, b7: 7, b8: 8, b9: 9, b0: 0};
        this.buttonNumb = this.buttonNumb.bind(this);
        this.formNumb = this.formNumb.bind(this);

    }
    buttonNumb(){

    }
    formNumb(){

    }
    render(){
        return (
            <div className="cal_block">
                <div className="cal_form">
                    <form>
                        <input className="formCal" type="text" value={ this.state.form } />
                    </form>
                </div>
                <h1 className="textApp">Calculator</h1>
                <div className="cal_block_button_number">
                    <Grid container spacing={24}>
                        <Grid item xs={2}>
                            <Button onClick={this.button_1} variant="contained" color="primary">{this.state.b1}</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary">{this.state.b2}</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary">{this.state.b3}</Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Button variant="contained" color="primary">{this.state.b4}</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary">{this.state.b5}</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary">{this.state.b6}</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary">{this.state.b7}</Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Button variant="contained" color="primary">{this.state.b8}</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary">{this.state.b9}</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary">{this.state.b0}</Button>
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

export default Calculator;