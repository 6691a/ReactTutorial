import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    handleIncrement = (habit)=>{
        this.props.onIncrement(habit);
    }
    
    handleDecrement = (habit)=>{
        this.props.onDecrement(habit);
    }
    
    handleDelete = (habit)=>{
        this.props.onDelete(habit);
    }

    render() {
        return (
            <ul>
                {
                    this.props.habits.map(item =>(
                        // Habit에 item이라는 이름으로 item을 전달
                        <Habit
                            key={item.id}
                            item={item}
                            onincrement = {this.handleIncrement}
                            onDecrement = {this.handleDecrement}
                            onDelete = {this.handleDelete}

                        />
                    ))
                }
            </ul>
        );
    }
}

export default Habits;