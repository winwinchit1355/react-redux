import { useSelector,useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreater } from "../stores/actions/actionCreater"

export default function ZCompo() {
    const account = useSelector(state => state.account);
    const dispatch = useDispatch();
    const {add,remove} = bindActionCreators(actionCreater,dispatch);
  return (
    <div>
        <h1>ZCompo</h1>
        <h4>{account}</h4>
        <button onClick={()=>add(20)}>Add</button>
        <button onClick={()=>remove(20)}>Remove</button>
    </div>
  )
}
