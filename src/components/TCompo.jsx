import {  useSelector } from "react-redux";
import ZCompo from "./ZCompo";

export default function TCompo() {
    const account = useSelector(state => state.account);
  return (
    <div>
        <h1>TCompo</h1>
        <h2>{account}</h2>
        <br />
        <ZCompo/>
        
    </div>
  )
}
