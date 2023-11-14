import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {bindActionCreators} from "redux";
import { actionCreater } from "./stores/actions/actionCreater";
import './App.css';

function App() {
  const nameRef = useRef();
  const phoneRef = useRef();
  const account = useSelector(state => state.account); // fetch data
  const users = useSelector(state => state.user);
  const dispatch = useDispatch(); //action on data
  const {add,remove, insert, destroy} = bindActionCreators(actionCreater,dispatch);
  const addUser = (e) =>{
    e.preventDefault();
    if(phoneRef.current.value == '' && nameRef.current.value == '')
    {
      return false;
    }
    let user={
      phone:phoneRef.current.value,
      name:nameRef.current.value,
    }
    insert(user);
    phoneRef.current.value = '';
    nameRef.current.value = '';
  }
  return (
    <>
      <h1>{account}</h1>
      
      <button onClick={()=>add(50)}>Add</button>
      <button onClick={()=>remove(50)}>Remove</button>
      <br />
      <h1>User List</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map(user => <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td><button onClick={()=>destroy(user)} style={{"backgroundColor":"red","margin":"4px"}}>Delete</button></td>
          </tr>)
        }
        </tbody>
      </table>
      
      <br />
      <form onSubmit={addUser}>
        <input placeholder="phone" type="phone" ref={phoneRef} />
        <br />
        <input placeholder="name" type="text" ref={nameRef} />
        <br />
        <br />
        <button type="submit">Add User</button>
      </form>
    </>
  )
}

export default App
