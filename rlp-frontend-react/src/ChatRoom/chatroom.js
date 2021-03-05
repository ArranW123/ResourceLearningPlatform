import React, {useRef, useState} from 'react';
import './chatroom.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import axios from 'axios';
import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from '../Header/Header';

firebase.initializeApp({
  //config
  apiKey: "AIzaSyARxeXD1DVCHrruGiul4UKy23tgEfSH_rU",
  authDomain: "e-learning-react.firebaseapp.com",
  projectId: "e-learning-react",
  storageBucket: "e-learning-react.appspot.com",
  messagingSenderId: "366242974318",
  appId: "1:366242974318:web:860310e18ce9b7de58f47f",
  measurementId: "G-4EDBMDEQ1R"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App()
{
  const [user] = useAuthState(auth);

  return (
    <div className="App">
    <Header />
    <header>
      <h1>ChatRoom</h1>
      <SignOut />
    </header>

    <section>
      {user ? <ChatRoom /> : <SignIn />}
    </section>

    </div>
  )
}


function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return(
    <>
    <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom(){
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

  const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.FieldView.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behaviour: 'smooth' });
  }

  return(
    <>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={dummy}></span>
    </main>
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type message here" />
      <button type="submit" disabled={!formValue}></button>
    </form>
    </>
  )

}

function ChatMessage(props) {
  const {text, uid} = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';


  return(
    <>
    <div className={'message ${messageClass}'}>
      <p>{text}</p>
    </div>
    </>
  )
}

export default App;
