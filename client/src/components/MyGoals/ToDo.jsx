import React, { Component } from 'react';
import style from './MyGoals.module.css';
import ToDoFooter from './ToDoList/ToDoFooter';
import ToDoGoalCreator from './ToDoList/ToDoGoalCreator';
import GoalsList from './ToDoList/GoalsList';

class MyGoals extends Component {

    constructor(props) {
        super();
        this.state = {
            goals: [
                { text: "Check ToDo", isDone: false, id: 1 },
            ],
            filter: "all"      
        };   
        this.updateGoal=this.updateGoal.bind(this);
        this.putGoalToState=this.putGoalToState.bind(this);
        this.deleteGoal=this.deleteGoal.bind(this);
        this.changeFilter=this.changeFilter.bind(this);
        this.clearCompleted=this.clearCompleted.bind(this)

    }

    clearCompleted(){
        this.setState({
            goals: this.state.goals.filter(g => !g.isDone)
        });
    }

    changeFilter(filterValue){
        this.setState({filter:filterValue})
    }

    putGoalToState(goal) {
            this.setState({
                goals: [...this.state.goals, goal]
            });
    }

    deleteGoal(goalID) {

        const newGoalsList = this.state.goals.filter((g) => {
            return g.id !== goalID;
        });

        this.setState({
            goals: newGoalsList
        });
    }

    updateGoal(goal){
        const newGoalsList= [...this.state.goals];

        newGoalsList.forEach((g)=>{
            if(g.id === goal.id) {
                g.isDone = goal.isDone;
                return;
            }
        });

        this.setState({
            goals: newGoalsList
        });

    }

    render() {
        let { goals,filter} = this.state;

        let filteredGoals =[];
        if (filter === 'all') filteredGoals= goals;
        if (filter === 'active') filteredGoals = goals.filter(g =>!g.isDone);
        if (filter === 'completed') filteredGoals = goals.filter(g =>g.isDone);

        return (
            <div className={style.goalsForm}>
                <ToDoGoalCreator onCreate={this.putGoalToState} />
                <GoalsList goals={filteredGoals} 
                onUpdate={this.updateGoal}
                onDelete={this.deleteGoal} />
                <ToDoFooter goals={goals} 
                filter={filter}
                onFilterChanged={this.changeFilter}
                onClearCompleted={this.clearCompleted}
                 />
            </div>);
    }
};
export default MyGoals;
