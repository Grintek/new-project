import React from 'react'
import './style/_buttonApp.scss'

class ButtonApp extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
          <button  className="but_on">Welcom</button>
        );
    }
    
}
export default ButtonApp;