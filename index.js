import React from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      tasklist:[],
      count:0
    }
  }
  deleteTask=(e)=>{
    e.persist();
    console.log(e.target.parentElement)
    var id=e.target.parentElement.key;
    alert(id);
  }
  addTask=(e)=>{
    e.persist();
    var newval = e.target.previousElementSibling.value;
    this.setState({
      tasklist : [...this.state.tasklist,{'id':this.state.count+1,'value':newval}],
      count:this.state.count+1
    })
  }
  render(){
    console.log(this.state)
    return (
      <div>
        <input type='text' />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {
            this.state.tasklist.map((a)=>{
              return (<li key={a.id}>
                        {a.value}
                        <button onClick={this.deleteTask}>Delete</button>
                      </li>)
            })
          }
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

