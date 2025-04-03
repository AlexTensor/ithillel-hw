import {useState} from "react";

function Button({text, countIncrement}) {
    const [count, setCount] = useState(0);
    const newCounter = countIncrement(count);

    const onclick = () => {
        setCount(newCounter);
    }

    return (
    <>
        <button onClick={onclick}>
            {text} {count}
        </button>
    </>
    )
}
export default Button;