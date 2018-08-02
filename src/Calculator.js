import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
                            <Button onClick={} variant="contained" color="primary">1</Button>
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

export default Calculator;