import {useState} from 'react'
import './App.css'

function App() {
    const [playerSymbol, setPlayerSymbol] = useState("")
    const [computerSymbol, setComputerSymbol] = useState("")

    const [playerPoints, setPlayerPoints] = useState(0)
    const [computerPoints, setComputerPoints] = useState(0)

    function playGame() {
        const symbols = ["✋", "✌", "✊"]
        const randomSymbol = symbols[Math.floor(Math.random()*symbols.length)]

        /// PLAYER WINS
        if(playerSymbol === "✋" && randomSymbol === "✊") {
            setPlayerPoints(playerPoints + 1)
        }
        if(playerSymbol === "✌" && randomSymbol === "✋") {
            setPlayerPoints(playerPoints + 1)
        }
        if(playerSymbol === "✊" && randomSymbol === "✌") {
            setPlayerPoints(playerPoints + 1)
        }

        /// COMPUTER WINS
        if(randomSymbol === "✋" && playerSymbol === "✊") {
            setComputerPoints(playerPoints + 1)
        }
        if(randomSymbol === "✌" && playerSymbol === "✋") {
            setComputerPoints(playerPoints + 1)
        }
        if(randomSymbol === "✊" && playerSymbol === "✌") {
            setComputerPoints(playerPoints + 1)
        }

        setComputerSymbol(randomSymbol)
    }

    return (
        <div className="d-flex justify-content-center p-5 text-center">
            <div>
                <div className="d-flex gap-5">
                    <div>
                        <h1>Player Selected - {playerPoints}</h1>
                        <div className="symbol">{playerSymbol}</div>
                    </div>
                    <div>
                        <h1>Computer Selected = {computerPoints}</h1>
                        <div className="symbol">{computerSymbol}</div>
                    </div>
                </div>

                <button onClick={playGame}>Play Game</button>

                <div className="d-flex">
                    <div className="symbol" onClick={() => setPlayerSymbol("✋")}>✋</div>
                    <div className="symbol" onClick={() => setPlayerSymbol("✌")}>✌️</div>
                    <div className="symbol" onClick={() => setPlayerSymbol("✊")}>✊</div>
                </div>
            </div>

        </div>
    )
}

export default App
