import React, { Component } from 'react';
import style from './ToDoList.module.css'

class ToDoFooter extends Component {

handleFilterChanged(e){
    this.props.onFilterChanged(e.currentTarget.dataset.value);
}

    render() {
        let { goals,filter,onClearCompleted} = this.props;
        return (
            <div className={style.footer}>
                <div>
                <span>{this.props.goals.filter((g) => !g.isDone).length} items left</span>
                </div>
                <div className={style.button}>
                    <button className={filter == 'all'? style.button_selected : ''} data-value="all"
                    onClick={this.handleFilterChanged.bind(this)}>All</button>
                    <button className={filter == 'active'? style.button_selected : ''} data-value="active"
                    onClick={this.handleFilterChanged.bind(this)}>Active</button>
                    <button className={filter == 'completed'? style.button_selected : ''} data-value="completed"
                    onClick={this.handleFilterChanged.bind(this)}>Completed</button>
                </div>
            <div><span className={style.ClearCompleted} onClick={onClearCompleted}>Clear Components</span></div>
            </div>);
    }
};
export default ToDoFooter;
