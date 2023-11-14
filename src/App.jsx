import { useDispatch,useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreator } from "./stores/actionCreators";

function App() {
  const loggedIn = useSelector( state => state.loggedIn);
  const dispatch = useDispatch();
  const {login,logout} = bindActionCreators(actionCreator,dispatch);
  return (
    <div>
      <h1>{loggedIn ? 'member':'guest'}</h1>
      <button onClick={()=>login(true)}>Login</button>
      <button onClick={()=>logout(false)}>Logout</button>
    </div>
  )
}

export default App
