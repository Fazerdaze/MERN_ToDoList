import React, { Component } from 'react';
import style from './ToDoList.module.css';
import axios from 'axios';

class ToDoGoalCreator extends Component {

    constructor(props) {
        super();

        this.newIndex = 2;

    }

    createNewGoal(e) {

        if (e.key === 'Enter') {
            const newGoal=
            { text: e.currentTarget.value, 
            isDone: false, 
            id: this.newIndex 
        };
    axios.post("/goals", newGoal)
    .then(res => res.newGoal)
    this.props.onCreate(newGoal);
    
    e.currentTarget.value = '';
    this.newIndex++;
    }
    }

    render() {
        return (
            <div className={style.goalsFormCreator}>
                <input placeholder="Add to-do..." onKeyPress={this.createNewGoal.bind(this)} maxLength="40" />
            </div>);
    }
};
export default ToDoGoalCreator;
