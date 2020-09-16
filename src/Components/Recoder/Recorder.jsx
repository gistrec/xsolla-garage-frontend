import Axios from 'axios';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import axios from "axios";


const Recorder = () => {
    const { transcript, resetTranscript } = useSpeechRecognition()
    const url = "http://35.184.198.167:8081";
  
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null
    }

    const sendText = () => {
      const api = '/task';
      const data =  {
        "user_id": 9001,
        "title": "Тест",
        "text_content": transcript,
        "date_create": "2020-09-08 17:17:52",
        "date_target": "2020-09-20 17:17:52",
        "is_important": true,
        "is_urgent": true
      };
      /*const options = {
        method: 'POST',
        url: url + api,
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };*/

      fetch(url + api, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
              },
          body: JSON.stringify(data)
      })

      /*axios(options)
        .then(res => console.log(res))
        .then(() => getTasks())
        .catch(err => console.dir(err))*/
    }
    
    const getTasks = () => {
      const api = '/task';
      const options = {
        method: 'GET',
        url: url + api,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };

      axios.get(url + api)
        .then(res => console.log(res))
        .catch(err => console.dir(err));
    }
  
    return (
      <div>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={() => {
          SpeechRecognition.stopListening;
          getTasks()
        }}>
          Stop
        </button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
    )
  }
  export default Recorder