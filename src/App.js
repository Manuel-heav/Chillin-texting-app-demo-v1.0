import './App.css';
import { useState, useEffect } from 'react';
import Message from './Message.js'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import db from './Firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {;
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([{}]);
  const [username, setUsername] = useState('')


  useEffect(()=>{
    setUsername(prompt('Please enter your name'));
  }, [])

  useEffect(()=> {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => doc.data()))
    })
  }, [] )

  const sendMessages = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
    return (
      <div className="App">
         <h1>Chillin!</h1>
         <h2>Welcome {username}</h2>
         <form className="app-form">
          <FormControl className='app-formControl'>
              <Input className="app-input"placeholder="Enter a message..." value={input} onChange={(e) => {
              setInput(e.target.value)
            }}/>

              <IconButton className="app-iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessages}>
                <SendIcon />
              </IconButton>
            </FormControl>
          </form>

          {
              messages.map(message => ( 
                <Message message={message} username={username}/>
              ))
            }
         
      </div>
    
    )
  }
export default App;






// if(!username === 'Brook' | !username === 'Aman' | !username === 'Jony', !username === 'Eyu'){
//   alert("You are not a valid member");
  
// }