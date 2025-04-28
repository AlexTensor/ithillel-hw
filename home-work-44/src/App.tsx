import './App.css'
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import CounterElement from "./components/CounterElement.tsx";


function App() {

  return (
      <>
        <Provider store={store}>
          <CounterElement />
        </Provider>
      </>
  )
}

export default App
