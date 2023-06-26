import React,{useState} from 'react'

export default function TestForm(props) {
    const [text,setText] = useState(' ');
    const handleUpClick =()=>
    {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick =()=>
    {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");

    }
    const copytext =()=>{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy text","success");

    }
    const clearText = ()=>
    {
        let newtext = " ";
        setText(newtext);
        props.showAlert("clear all the text","success");

    }
    const handleextraspace = ()=>
    {
       let newtext_1= text.split(/[ ]+/);
       setText(newtext_1.join(" "));
       props.showAlert("remove all whitespace","success");


    }

    const handleOnchange = (event)=>
    {
           setText(event.target.value); 
    }
    
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8" style={{backgroundColor: props.mode ==='dark'? 'grey':'white',color: props.mode ==='dark'? 'white':'grey'}}></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-2' onClick={copytext}>copy to clipboard</button>
        <button className='btn btn-primary mx-2' onClick={clearText}>clear  text</button>
        <button className='btn btn-primary mx-2' onClick={handleextraspace}>Remove extra space</button>


    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'? 'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}


    





       