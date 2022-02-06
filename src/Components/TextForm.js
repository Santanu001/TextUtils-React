import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter text here ");

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upercase", "success");
    }

    const handleLowClick = () => {
        console.log("LowerCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearText = () => {
        console.log("Clear Text was clicked");
        setText("");
        props.showAlert("Text Cleard", "success");
    }

    const handleCpFletter = () => {
        console.log("Capitalize firtst letter was clicked");
        let t = text.split(" ");
        let newText = "";
        t.forEach(element => {
            newText = newText + element.charAt(0).toUpperCase() + element.slice(1) + " ";
        });
        setText(newText);
        props.showAlert("Capitalized first letters", "success");
    }

    const handleOnChange = (event) => {
        console.log("onchanged");
        setText(event.target.value);
    }
    
    return (
        <>
            <div className='container' style = {{color: props.mode ==='dark' ? 'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='light'?'white':'#212529', color: props.mode ==='dark' ? 'white':'black'}}   id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>

                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCpFletter}>Capitalize First letter </button>
            </div>

            <div className='container' style = {{color: props.mode ==='dark' ? 'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
                <h2>Text Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
