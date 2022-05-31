import React, { useState } from 'react'
import CryptoJS from 'crypto-js'

export default function TextForm(props) {
  const [text, setText] = useState("") 
  const [upState, setUpState] = useState('')
  const [lowState, setLowState] = useState('')
  const [encState, setEncState] = useState('')
  const [decState, setDecState] = useState('disabled')
  
  const onChangeText = (event) => { 
      setText(event.target.value)
      setEncState('')
      setDecState('disabled')
      setLowState('')
      setUpState('')

  }

  const onUpClick = () => {
    let upper = text.toUpperCase()
    setText(upper)
    setUpState('disabled')
    setLowState('')
    setDecState('disabled')
    props.alert('Text coverted to uppercase', 'success')
  }

  const onLowClick = () => {
    let lower = text.toLowerCase()
    setText(lower)
    setLowState('disabled')
    setUpState('')
    setDecState('disabled')
    props.alert('Text coverted to lowercase', 'success')
  }

  const onClearText = () => {
      let newText = ''
      setText(newText)
      props.alert('Text cleared', 'success')
  }

  const onEncrypt = () => {
    //   console.log("encrypted")
    var encryptedAES = CryptoJS.AES.encrypt(text, "My Secret Passphrase");
    setText(encryptedAES.toString())
    setEncState('disabled')
    setDecState('')
    setLowState('disabled')
    setUpState('disabled')
    props.alert('Text encrypted', 'success')
  }

  const onDecrypt = () => {
    // console.log("decrypted")
    var decryptedBytes = CryptoJS.AES.decrypt(text, "My Secret Passphrase");
    var plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);
    setText(plaintext)
    setDecState('disabled')
    setEncState('')
    props.alert('Text decrypted', 'success')
  }

  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <div className="container my-3">
        <h1>{props.label}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{color:props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'grey':'white'}} value={text} onChange={onChangeText} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-primary mx-2 ${text.length===0?'disabled':''}`} onClick={onClearText}>Clear Text</button>
        <button className={`btn btn-primary mx-2 ${text.length===0?'disabled':upState}`} onClick={onUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-primary mx-2 ${text.length===0?'disabled':lowState}`} onClick={onLowClick}>Convert to Lowercase</button>
        <button className={`btn btn-primary mx-2 ${text.length===0?'disabled':encState}`} onClick={onEncrypt}>Encrypt</button>
        <button className={`btn btn-primary mx-2 ${text.length===0?'disabled':decState}`} onClick={onDecrypt}>Decrypt</button>
    </div>
    <div className='container my-3'>
        <h2>Your text information</h2>
        <p>{text.split('.').length - 1} sentences, {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008*(text.split(' ').length - 1)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? 'Enter any text above' : text}</p>
    </div>
    </div>
  )
}
