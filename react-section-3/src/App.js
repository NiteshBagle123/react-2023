import React, { useEffect, useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
// class App extends React.Component {  
//    constructor(props) {  
//       super(props);  
//       this.state = {hello: "JavaTpoint"};  
//       this.changeState = this.changeState.bind(this)  
//    }    
//    render() {  
//       return (  
//          <div>  
//              <h1>ReactJS component's Lifecycle</h1>  
//              <h3>Hello {this.state.hello}</h3>  
//              <button onClick = {this.changeState}>Click Here!</button>          
//          </div>  
//       );  
//    }  
//    componentWillMount() {  
//       console.log('Component Will MOUNT!')  
//    }  
//    componentDidMount() {  
//       console.log('Component Did MOUNT!')  
//    }  
//    changeState(){  
//       this.setState({hello:"All!!- Its a great reactjs tutorial."});  
//    }  
//    componentWillReceiveProps(newProps) {      
//       console.log('Component Will Recieve Props!')  
//    }  
//    shouldComponentUpdate(newProps, newState) {  
//       return true;  
//    }  
//    componentWillUpdate(nextProps, nextState) {  
//       console.log('Component Will UPDATE!');  
//    }  
//    componentDidUpdate(prevProps, prevState) {  
//       console.log('Component Did UPDATE!')  
//    }  
//    componentWillUnmount() {  
//       console.log('Component Will UNMOUNT!')  
//    }  
// }  
// function App() {
//   const [data, setData] = useState({});
//   const fetchData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => setData(json));
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);
//   // return React.createElement(
//   //   'div',
//   //   {}, 
//   //   React.createElement('h2', {}, 'Lets get started'),
//   //   React.createElement(Expenses, {})
//   // )
//   // return (
//   //   <Expenses />
//   // );
//   const [firstName, setFirstName] = useState('');
//   const firstNameOnChangeHandler = (e) => {
//     setFirstName(e.target.value);
//   }
//   return (
//     <div>
//       {!Object.keys(data).length && <p>Loading results. Please wait...!</p>}
//       {Object.keys(data).length && <div>
//           <h1>UserId: {data.userId}</h1>
//           <h1>Title: {data.title}</h1>
//           <h1>Status: {data.completed.toString()}</h1>
//         </div>}

//       <input 
//         text 
//         onChange={(e) => firstNameOnChangeHandler(e)} 
//         placeholder='First Name'
//       />
//       {firstName &&  <h1>First Name: {firstName}</h1>}
//     </div>
//   )
// }

function App () {
  return (
    <div>
      <Expenses />
      <NewExpense />
    </div>
  )
}
export default App;

