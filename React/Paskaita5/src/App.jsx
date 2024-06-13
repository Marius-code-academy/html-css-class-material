import {useEffect, useState} from 'react'
import './App.css'
import SingleComment from "../components/SingleComment.jsx";

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(res => {
                setData(res)
                console.log(res)
            })
    }, [])

    return (
        <div className="d-flex justify-content-center p-5 text-center">

            <div>
                {data.map((x, i) => <SingleComment key={i} comment={x}/>)}
            </div>
        </div>
    )
}

export default App
