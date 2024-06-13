import {useEffect, useState} from 'react'
import './App.css'
import Comp1 from "./components/Comp1.jsx";

function App() {
    const [percent, setPercent] = useState(0)

    function resize(add) {
        if(add) {
            if(percent+3 > 100) return setPercent(100)
            setPercent(percent+3)

        } else {
            if(percent-3 < 0) return setPercent(0)
            setPercent(percent-3)
        }
    }

    return (
        <div className="d-flex justify-content-center p-5 text-center">
            <div>
                <div className="progress mb-5">
                    <div style={{width: percent + "%"}}></div>
                </div>

                <button onClick={() => resize(false)}>minus</button>
                <button onClick={() => resize(true)}>plus</button>
            </div>
        </div>
    )
}

export default App
