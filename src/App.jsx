import { useDispatch,useSelector } from "react-redux"
import {login,logout} from "./stores/actions"

function App() {
  const loggedIn = useSelector( state => state.loggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{loggedIn ? 'member':'guest'}</h1>
      <button onClick={()=>dispatch(login(true))}>Login</button>
      <button onClick={()=>dispatch(logout(false))}>Logout</button>
    </div>
  )
}

export default App
