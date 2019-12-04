import React, { Component } from 'react';
import style from './ToDoList.module.css';
import Goal from './Goal/Goal';

class GoalsList extends Component {
   
   deleteGoal(goalId){

}

render() {
    return (
        
        <div className={style.goals}>
        {
        this.props.goals.map((goal, index) => {
        return <Goal goal={goal}
        updateCallback={this.props.onUpdate.bind(this)} 
        deleteCallback={this.props.onDelete.bind(this)} key={goal.id} />
        })
        }
        </div>);
        }
};
export default GoalsList;