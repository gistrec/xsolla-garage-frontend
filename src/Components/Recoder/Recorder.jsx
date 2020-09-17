import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import styles from './Recorder.module.css'
import moment from 'moment'


const Recorder = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()
  const url = "http://35.184.198.167:8081";

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const sendText = () => {
    const api = '/task';
  //const date = moment().format('YYYY-MM-DD HH:mm:ss');
    const data = {
      "text_content": transcript,
    //"current_date": date
    };

    fetch(url + api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  }

  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Voice text input</h1>
      <br/>
      <button onClick={() => { SpeechRecognition.startListening({ continuous: true, language: 'ru' }) }}>Start</button>
      <button onClick={ SpeechRecognition.stopListening }>Stop</button>
      <button onClick={ resetTranscript }>Reset</button>
      <button onClick={() => { sendText() }}>Send Text</button>
      <br/>
      <br/>
      <div className={styles.textContainer}>
        <p className={styles.text}> {transcript} </p>
      </div>
      <br/>
    </div>
  )
}
export default Recorder