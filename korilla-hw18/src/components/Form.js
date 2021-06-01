import React, { useState } from 'react'

const Form = (props) => {
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        const userInput = e.target.value;
        setInput(userInput);
        console.log(input)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleNameSearch(input)
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search By Name" value={input} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
