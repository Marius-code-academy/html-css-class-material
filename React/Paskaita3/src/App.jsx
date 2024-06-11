import {useState} from 'react'
import './App.css'

function App() {
    const [cookieImage, setCookieImage] = useState("https://pngimg.com/d/cookie_PNG13683.png")
    const [points, setPoints] = useState(0)
    const [pointsPerClick, setPointsPerClick] = useState(1)
    const [bgColor, setBgColor] = useState('white')

    function buyUpgrade(num, price) {
        if(price > points) return
        setPoints(points - price)

        if(num === 1) {
            setPointsPerClick(2)
        }
        if(num === 2) {
            setPointsPerClick(3)
        }
        if(num === 3) {
            setCookieImage("https://pngimg.com/uploads/cookie/cookie_PNG13656.png")
        }
        if(num === 4) {
            setBgColor('pink')
        }
    }

    return (
        <div className="d-flex p-5" style={{backgroundColor: bgColor}}>
            <div className="grow3 p-5 d-flex flex-column align-items-center">
                <div>
                    <img src={cookieImage} alt="" onClick={() => setPoints(points + pointsPerClick)}/>
                </div>
                <div className="text-center mt-5">
                    <h3>Points: {points}</h3>
                </div>

            </div>
            <div className="grow1 p-3 upgrades">
                <div className="p-2 border mb-2" onClick={() => buyUpgrade(1, 50)}>
                    <div>2 points per click</div>
                    <div>Price: 50 $</div>
                </div>
                <div className="p-2 border mb-2" onClick={() => buyUpgrade(2, 70)}>
                    <div>3 points per click</div>
                    <div>Price: 70 $</div>
                </div>
                <div className="p-2 border mb-2" onClick={() => buyUpgrade(3, 30)}>
                    <div>Change cookie image</div>
                    <div>Price: 30 $</div>
                </div>
                <div className="p-2 border mb-2" onClick={() => buyUpgrade(4, 20)}>
                    <div>Change bg color</div>
                    <div>Price: 20 $</div>
                </div>

            </div>

        </div>
    )
}

export default App
