import React, { useState } from 'react'
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAyTPzyoOF08DKgBsJmct0M544F8dEx6K4",
  authDomain: "pablozon-77426.firebaseapp.com",
  projectId: "pablozon-77426",
  storageBucket: "pablozon-77426.appspot.com",
  messagingSenderId: "510211976483",
  appId: "1:510211976483:web:6be1bb526bc48ac3023096",
  measurementId: "G-BQK0RLTQNE"
})
const firestore = firebase.firestore()

function Contact(e){
  const messagesRef = firestore.collection("messages")
  const[sender, setSender] = useState("")
  const[email, setEmail] = useState("")
  const[content, setContent] = useState("")
  const sendMessage = async(e) => {
    e.preventDefault();
    await messagesRef.add({
      mail: email,
      text: content,
      username: sender,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setContent("")
    setEmail("")
    setSender("")
    document.getElementById('myInput1').value = ''
    document.getElementById('myInput2').value = ''
    document.getElementById('myInput3').value = ''
  }
  return (
    <div className='contact' id='contact'>
      <div className='titleAbout'>
        <p>Contact me</p>
        <div className="line"></div>
      </div>
      <div className='message'>
        <div className='input1'>
          <p>Your Name</p>
          <input placeholder='Type it!' id="myInput1" type="text" onChange={event => setSender(event.target.value)}/> 
        </div>
        <div className='input2'>
          <p>Your e-mail</p>
          <input placeholder='Type it!' id="myInput2" type="text" onChange={event => setEmail(event.target.value)}/>
        </div>
        <div className='input3'>
          <p>Text me something</p>
          <input placeholder='Type it!' id="myInput3" type="text" onChange={event => setContent(event.target.value)}/>
        </div>
        <div  className="submit">
          <button onClick={sendMessage} disabled={!sender && !email}>send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact