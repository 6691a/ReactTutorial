import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    handleIncrement = ()=>{this.props.onincrement(this.props.item)}

    handleDecrement = ()=>{this.props.onDecrement(this.props.item)}

    handleDelete = ()=>{this.props.onDelete(this.props.item)}

    render() {
        // 부모에서 넘겨준 이름 this.props.item에 name 과 count가 있다
        // 이 값을 const로 선언한 name,count에 할당 해준다.
        // 단 이름이 같아야만 자동으로 할당 해줌
        const { name, count } = this.props.item;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
                </button>
            </li>
            
        );
    }
}

export default Habit;