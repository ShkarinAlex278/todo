import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function sayHello() {
      alert('Hello Rohit!');
    }


function App() {
  return (
  <div className='form'>

  <div className="wrapper">
    <header>Todo App</header>
    <div className="inputField">
      <input type="text" placeholder="Add your new todo" />
      <button className='add' onClick={sayHello}> Add
         {/* <i class="fas fa-plus"></i> */}
        </button>
    </div>
    <ul className="todoList">
    </ul>
    <div className="footer">
      <span>You have <span className="pendingTasks"></span> pending tasks</span>
      <button onClick={() => {console.log("Click Clear...")}}>Clear All</button>
    </div>
  </div>


    </div>
  );
}

export default App;
