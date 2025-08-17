import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../CounterRedux/action";

export function CounterRedux() {

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter)
      
    return (
         <div  className="btn-group" role="group">
            <button type="button" className="btn btn-primary"
                onClick={() => dispatch(decrement())}>-</button>
            
            <div className="container-counter">{counter}</div>

            <button type="button" className="btn btn-primary"
                onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}