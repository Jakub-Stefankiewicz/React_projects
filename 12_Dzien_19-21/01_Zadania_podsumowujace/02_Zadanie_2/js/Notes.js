import React, {useState} from 'react';

const Notes = () => {
    const [text, setText] = useState(" ");

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <form>
                <textarea value={text} onChange={handleChange}/>
                <button>Wyczyść</button>
                <span>{text}</span>
            </form>

        </div>
    );
};

export default Notes;