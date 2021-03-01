import React from 'react';
import './chatbot.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

const [user] = useAuthState(auth);

function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatMessage(props) {
  const {text, uid} = props.message;

  return <p>{text}</p>
}

function ChatRoom(){
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return(
    <>
    <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </div>
  )

}

return (
  <div>
  <Header/>

    <section>
      {user ? <ChatRoom /> : <SignIn />}
    </section>

  </div>
)

export default chatbot;
