import {useContext} from "react";
import {MyFirstContext} from "../App.tsx";

const About = () => {
    const context = useContext(MyFirstContext)
    return (
        <div>
            <h1>About</h1>
            <h2>{context.data}</h2>
        </div>
    );
};

export default About;