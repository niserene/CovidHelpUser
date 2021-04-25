import React from 'react' 
import './MainComponent.css'

class MainComponent extends React.Component{
    
    constructor(){
        super();
        this.state = {
            'init':"none"
        }
    }

    render(){
        return(
            <h1>Hello India</h1>
        )
    }
}

export default MainComponent;
