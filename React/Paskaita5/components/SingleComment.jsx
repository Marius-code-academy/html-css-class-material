import React, {useState} from 'react';

const SingleComment = ({comment}) => {

    const [color, setColor] = useState('white')

    function randomColor() {
        const rnd = () => Math.round(Math.random()*255)
        const colorCode = `rgb(${rnd()}, ${rnd()}, ${rnd()})`
        setColor(colorCode)
    }

    return (
        <div style={{backgroundColor: color}} onClick={randomColor}>
            <h3>{comment.email}</h3>
            <p>{comment.body}</p>
        </div>
    );
};

export default SingleComment;