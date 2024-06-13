import React, {useState} from 'react';

const Comp1 = ({emojies}) => {

    const [icon, setIcon] = useState("")

    function update() {
        const randomItem = emojies[Math.floor(Math.random()*emojies.length)]
        setIcon(randomItem)
    }

    return (
        <div className="p-5 border" onClick={update}>
            <h1>{icon}</h1>
        </div>
    );
};

export default Comp1;