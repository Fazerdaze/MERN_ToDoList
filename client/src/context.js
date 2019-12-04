import React, {Component} from 'react';

const Context = React.createContext()
export class Provider extends Component {
    state={
        goals:[
            {
                id: 1,
                text: "check todo",
                isDone: false
            },
            {
                id: 2,
                text: "check react",
                isDone: false
            },
            {
                id: 3,
                text: "check server",
                isDone: false
            },
        ]
    }
render(){
    return(
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
}
}

export const Consumer = Context.Consumer