import React, { Component } from 'react';
import './app.css';
import Habits from './componets/habits';
import Navbar from './componets/navbar';

class App extends Component {
  state = {
    habits: [
        //고유한 키가 필요함
        //자식 컴포넌트가 존재 시 키를 요구 함
        //아이디를 통해 랜더링 시 효율적으로 판단 함
        {id: 1, name: 'Reading',count:0},
        {id: 2, name: 'Runing',count:0},
        {id: 3, name: 'Coding',count:0},
    ]
  }

  handleIncrement = (habit)=>{
    const newHabits = [...this.state.habits];
    const index = newHabits.indexOf(habit);
    newHabits[index].count++;
    console.log(`기존 state/habites : ${this.state.habits[index].count}`);
    console.log(`복사한 habites : ${newHabits[index].count}`);

    this.setState({habits : newHabits});
  }

  handleDecrement = (habit)=>{
      const newHabits = [...this.state.habits];
      const index = newHabits.indexOf(habit);
      const count = newHabits[index].count-1;
      newHabits[index].count = count < 0 ? 0 : count;
      this.setState({habits : newHabits});
  }

  handleDelete = (habit)=>{
      const newHabits = [...this.state.habits];
      const index = newHabits.indexOf(habit);
      newHabits.splice(index,1);


      // const newHabits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits : newHabits});
  }

  render() {
    return (
      <>
      <Navbar
        totalCount = {this.state.habits.filter(item => item.count > 0).length}
      />
      <Habits 
        habits={this.state.habits}  
        onIncrement = {this.handleIncrement}
        onDecrement = {this.handleDecrement}
        onDelete = {this.handleDelete}
      />
      </>
    );
  }
}

export default App;