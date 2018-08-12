import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';




// калькулятор
class Calculator extends Component{


    constructor(props){
        super(props);
        this.state = {
            form: "" , clear: "clear", plus: "+",
            minus: "-", divide: "/", multiply: "*", equally: "=", equallyNums: ""
        };
        this.buttonNumb = this.buttonNumb.bind(this);
        this.buttonSumm = this.buttonSumm.bind(this);

    }
    buttonNumb(e) {
            this.setState(prevState => ({
                form: prevState.form + e
            }));
    }
    buttonSumm(ae){
        let last = this.state.form.slice(-1);

        if( ae === this.state.plus || ae === this.state.minus || ae === this.state.divide || ae === this.state.multiply) {

            if ( last !== this.state.plus || last !== this.state.minus || last !== this.state.multiply || last !== this.state.divide) {
                this.setState(prevState => ({
                    form: prevState.form + ae
                }));
                console.log(last);
            }
        }
        console.log(this.state.form);
        if(ae === this.state.clear){
            this.setState(prevState => ({
                form: prevState.form = ""
            }));
        }
    }
    equlare(ae) {
        if (ae === this.state.equally && this.state.form !== "") {
            let num = eval(this.state.form);
            let numS = String(num);
            this.setState(prevState => ({
                form: prevState.form = numS
            }));
            this.setState(prevState => ({
                form: prevState.equallyNums = numS
            }));


        }
        return this.state.form;
    }

    render(){
        const number = { num: [{ xs: 2, number: 1 }, { xs: 2, number: 2 }, { xs: 2, number: 3 },
                { xs: 5, number: 4 }, { xs: 2, number: 5 }, { xs: 2, number: 6 }, { xs: 2, number: 7 },
                { xs: 5, number: 8 }, { xs: 2, number: 9 }, { xs: 2, number: 0 }]};
        const amount = { num: [{ xs: 9, number: "+" }, { xs: 2, number: "-" }, { xs: 9, number: "/" },
                { xs: 2, number: "*" }, { xs: 9, number: "clear" }]};
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
                        {
                            // выводим цифры для калькулятора
                            number.num.map((numes, index) =>
                            <Grid item xs={numes.xs} key={index}>
                                <Button onClick={this.buttonNumb.bind(this, numes.number)}  variant="contained" color="primary">{ numes.number }</Button>
                            </Grid>
                        )}

                    </Grid>

                </div>
                <div className="cal_block_button_manipulation">
                    <Grid container spacing={24}>
                        { amount.num.map((amoun, index)=>
                            <Grid item xs={amoun.xs} key={index}>
                                <Button onClick={this.buttonSumm.bind(this, amoun.number)} variant="contained"
                                        color="primary">{ amoun.number }</Button>
                            </Grid>
                        )}
                        <Grid item xs={2}>
                            <Button onClick={this.equlare.bind(this, this.state.equally)} variant="contained" color="primary">=</Button> // выводит =
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={()=>this.props.equalityNam(this.state.equallyNums)} variant="contained" color="primary">Вывести в шапку</Button>
                        </Grid>
                    </Grid>

                </div>
            </div>
        );
    }
}


export default Calculator;

