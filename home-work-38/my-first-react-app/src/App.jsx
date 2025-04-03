import './App.css'
import Button from './components/Button'

function App() {

    function countIncrement (count) {
        return count + 1
    }
    return (
        <>
            <div>
                <Button text="My react btn!" countIncrement={countIncrement} > Some text </Button>
            </div>
        </>
    )
}

export default App
