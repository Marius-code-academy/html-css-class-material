import {useState} from 'react'
import './App.css'

function App() {
    const [getPhoto, setPhoto] = useState("https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg")


    function setCat() {
        setPhoto("https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg")
    }

    function setDog() {
        setPhoto('https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg')
    }

    return (
        <>
            <div>
                <img src={getPhoto} alt=""/>
            </div>

            <button onClick={setCat}>Cat</button>
            <button onClick={setDog}>Dog</button>
        </>
    )
}

export default App
