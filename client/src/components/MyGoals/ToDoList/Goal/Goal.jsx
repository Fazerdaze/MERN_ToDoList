import React, { Component } from 'react';
import style from './Goal.module.css'

class Goal extends Component {

    constructor(props) {
        super();

        this.parentDeleteCallback=props.deleteCallback;
        this.parentUpdateCallback=props.updateCallback;

    }

    deleteGoal(e) {
        this.parentDeleteCallback(this.props.goal.id);
    }

    toggleGoalStatus(e) {
        let goal ={...this.props.goal};

        goal.isDone = !goal.isDone;
        this.parentUpdateCallback(goal);
    }

    render() {
        return (
            <div className={style.goal}>
                <div className={ this.props.goal.isDone ? style.goal_done : style.goal} >
                    <input type="checkbox" checked={this.props.goal.isDone} onClick={this.toggleGoalStatus.bind(this)} />
                    {this.props.goal.text}
                    <span className={style.delete}
                        onClick={this.deleteGoal.bind(this)}>x</span>
                </div>
            </div>
        );
    }

}

export default Goal;
