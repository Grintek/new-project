import React, {Component} from 'react'



class Notes extends Component{
    constructor(props){
        super(props);

        this.state = {
            block: [], number: 0
        };
        this.buttonClearNote = this.buttonClearNote.bind(this); // удаление Notes

        this.buttonCreateNotes = this.buttonCreateNotes.bind(this); // создания Notes
    }

    buttonCreateNotes(){

        this.setState(prevState => ({
            number: prevState.number + 1
        }));
// каждое нажатие на кнопку создает новую запись в массиве
        let a = [];
        for(let i = 0; i <= this.state.number; i++) {
            a[i] = i;
        }
        this.setState(prevState => ({
            block: prevState.block = a
        }));



    }
    buttonClearNote(num){

        let mas = this.state.block;
        mas.splice(mas.indexOf(num), 1); // осуществляем поиск по индексу и удаление записи
        this.setState(prevState => ({
            block: prevState.block = mas
        }));
        this.setState(prevState => ({
            number: prevState.number - 1
        }));

    }
    render(){
        return (

            <div>
                <h1 className="textApp">Notes</h1>
                {this.state.block.map((num) =>
                    <div key={num} className="box_note">
                        <button className="clear_notes"><p className="clear_p" onClick={this.buttonClearNote.bind(this, num)}>x</p></button>
                        <input className="formCal inpt_note" type="text" name="name"/>
                    </div>)}

                <button  className="create_notes"  onClick={this.buttonCreateNotes}>+</button>
            </div>

        );
    }

}

export default Notes;