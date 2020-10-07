import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import SimpleHabit from './components/simpleHabit';




class App extends Component {
  state= {
    habits:[
        {id:1, name:'Reading',count:0},
        {id:2, name:'Running',count:0},
        {id:3, name:'Coding',count:0},
    ],
  };

  handleIncrement = (habit) => {
        
    const habits = [...this.state.habits]; //habits의 있는 데이터를 복사
    const index = habits.indexOf(habit); //habits의 있는 index를 받아서
    habits[index].count++; //index의 count를 ++ 시켜줌
    this.setState({habits:habits});
  }

  handleDecrement = (habit) => {
    const habits = [...this.state.habits]; //habits의 있는 데이터를 복사
    const index = habits.indexOf(habit); //habits의 있는 index를 받아서
    const count = habits[index].count-1; //index의 count를 -- 시켜줌
    habits[index].count = count <0 ? 0: count;
    this.setState({habits:habits});
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !==  habit.id);
    this.setState({habits});
  }

  handleAdd = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name: name, count:0}];
    this.setState({habits});
  }
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count=0;
      return habit;
    });
    this.setState({habits});
  }

  render() {
    return (
      <>
      <Navbar 
      totalCount = {this.state.habits.filter(item => item.count > 0).length}
      >

      </Navbar>
      <Habits
        habits = {this.state.habits}
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement}
        onDelete= {this.handleDelete}
        onAdd = {this.handleAdd}
        onReset={this.handleReset}
      ></Habits>
      </>
      // <>
      // <SimpleHabit></SimpleHabit>
      // </>
      
    );
  }
}

export default App;
