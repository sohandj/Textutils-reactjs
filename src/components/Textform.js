import React, {useState} from 'react'

export default function Textform(props) {
  const [text,setText] = useState("Enter Text Here");

  const UpperCase = () =>{
    // console.log("uppercase")
    let newText = text.toUpperCase();
    setText(newText)
  }
  const LowerCase = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const CamelCase = () =>{
    let newText = text
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0) return word; // first word remains lowercase
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  setText(newText);
  }

  const SentenceCase = () => {
      let newText = text.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
      setText(newText);  
  }
  const Clear = () =>{
    let newText = "";
    setText(newText)
  }
  const onChange = (event) =>{
    // console.log("onChange")
    setText(event.target.value)
  }
  
  let PreviewStyle ={
    border:'2px solid black',
    padding: '5px',
    
  }

  // const [myStyle, setMyStyle] = useState({
  //     color: 'white',
  //     backgroundColor: '#191970' 
  // });
  // if( props.textColor=== 'dark'){
  //   setMyStyle({
  //     color: 'black',
  //     backgroundColor: 'white'
  //   })
  // }else{
  //   setMyStyle({
  //     color: 'white',
  //     backgroundColor: '#191970'
  //   })
  // }
  // const [spStyle,setspStyle] = useState({
  //   background:'white',
  //   color:'black'
  // });
  // if(props.mode==='dark') {
  //   setspStyle({
  //     background:'#1e1e2f',
  //     color:'white'
  //   });
  // }else{
  //   setspStyle({
  //     background:'white',
  //     color:'black'
  //   });
  // }
  // let style2 = {
  //   background:'#1e1e2f',
  //   color:'white'
  // }


  return (
    <>
        <div className={`container mt-3 text-${props.textColor}`}>            
            <div className="mb-3 " 
              // style={myStyle}
            >
                <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.textColor}`}><h1>{props.heading}</h1></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={onChange} value={text} 
                style={{color : props.mode==='dark'?'white':'black' ,background: props.mode==='dark'?'#1e1e2f':'white'}}
                ></textarea>
            </div>
            <div className="container text-center">
              <button type="button" className="btn btn-primary me-2" onClick={UpperCase}>Upper Case</button>
              <button type="button" className="btn btn-primary me-2" onClick={LowerCase}>Lower Case</button>
              <button type="button" className="btn btn-primary me-2" onClick={CamelCase}>Camel Case</button>
              <button type="button" className="btn btn-primary me-2" onClick={SentenceCase}>Sentence Case</button>
              <button type="button" className="btn btn-primary" onClick={Clear}>Clear</button>
            </div> 
            <div className={`container text-${props.textColor}`}>
              <h1>Text Summary</h1>
              <p>{text.split(" ").length} Words and {text.length} Letters</p>
              <p>{0.008 * text.split(" ").length} minute  Time Taken to read</p>
            </div>
            <div className="container">
              <h3>Preview</h3>
              <p style={PreviewStyle}>{text.length>0?text:"Enter the text to preview here"}</p>
            </div>
        </div>
    </>
  )
}