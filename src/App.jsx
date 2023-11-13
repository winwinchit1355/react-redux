import { useDispatch, useSelector } from "react-redux";
import {bindActionCreators} from "redux";
import { actionCreater } from "./stores/actions/actionCreater";
import TCompo from "./components/TCompo";

function App() {
  const account = useSelector(state => state.account); // fetch data
  const dispatch = useDispatch(); //action on data
  const {add,remove} = bindActionCreators(actionCreater,dispatch);
  return (
    <>
      <h1>{account}</h1>
      <button onClick={()=>add(50)}>Add</button>
      <button onClick={()=>remove(50)}>Remove</button>
      <br />
      <TCompo/>
    </>
  )
}

export default App
