import {useDispatch, useSelector} from "react-redux";
import {selectCount} from "../redux/selectors.ts";
import {add10, decrement, increment} from "../redux/counterSlice.ts";


const CounterElement = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const runIncrement = () => {
        dispatch(increment());
    }
    const runDecrement = () => {
        dispatch(decrement());
    }
    const rudAdd10 = () => {
        dispatch(add10());
    }
    return (
        <>
            <div>My Counter {count}</div>
            <button onClick={runIncrement}>Increment</button>
            <button onClick={runDecrement}>Decrement</button>
            <button onClick={rudAdd10}>Add 10</button>
        </>
    )
}

export default CounterElement;