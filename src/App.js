import React, { Component } from 'react';
import './App.css';
import BoardList from './BoardList';
import BoardInsert from './BoardInsert';

class App extends Component {
  state= {
      boards:[
        {
          num: 1,
          title: "title1",
          content: "content1"
        }
      ]
  }

  insert = (data) => {
      let obj={
        num: this.state.boards[this.state.boards.length-1].num+1,
        title: data.title,
        content: data.content
      };  

      this.setState({
      boards: this.state.boards.concat(obj)
      }, () => console.log(this.state.boards));

  }
 
  deleteBtn = (dNum) => {
      this.setState({
          boards: this.state.boards.filter(boards => boards.num !== dNum)
      })
  }

  render(){
      return(
          <div className="boardInsert">
              <BoardInsert insert={this.insert}/>

              {this.state.boards.map((board) => 
                  <BoardList key={board.num} num={board.num} title={board.title} content={board.content} delete={this.deleteBtn}/>
               )}
          </div>
      )
  }
}

export default App;