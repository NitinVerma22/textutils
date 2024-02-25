
import React,{memo,useState}from 'react'



  
export default memo(function Textform(props) {
  const handleUpClick =()=>{
      
      let newText=text.toUpperCase();
      setText(newText);
      } 
  const handleLwClick =()=>{
      let newText=text.toLowerCase();
      setText(newText);
      } 
      const handleCopyClick =()=>{
        let text= document.getElementById('myBox');
       text.select();
       navigator.clipboard.writeText(text.value);
        }    
  const handleClrClick =()=>{
      setText('');
      } 
 const handleOnChange =(event)=>{
      setText(event.target.value);
      }


  const [text, setText]=useState("")
return (
  <div>
  
<div className="mb-3 mar">
<label htmlFor="myBox" className="form-label" style={{color:props.mode==='dark'?'white':'black'}}>Enter Your Text Here</label>
<textarea className={ `form-control bg-${props.mode}`}  style={{color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
<div className="btn btn-primary btn-m" onClick={handleUpClick} >Convert To Uppercase</div>
    <div className="btn btn-primary btn-m "onClick={handleLwClick}>Convert To Lowercase</div>
    <div className="btn btn-primary btn-m "onClick={handleClrClick}>Clear Text</div>
    <div className="btn btn-primary btn-m "onClick={handleCopyClick}>Copy Text</div>
</div>
<h3 style={{color:props.mode==='dark'?'white':'black'}}>Your Text Analysis</h3>
<p style={{color:props.mode==='dark'?'white':'black'}} ><b >words</b> {text.split(" ").length-1}  <b>charcters</b> {text.length}</p>
<p>{
  
  
  }</p>




</div>
  
)
})
