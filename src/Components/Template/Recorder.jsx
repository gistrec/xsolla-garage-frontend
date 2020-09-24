import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import styles from './Recorder.module.css'
import moment from 'moment'

const Recorder = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const url = 'https://garage-best-team-ever.tk'

  const sendText = () => {
    const api = '/task'
    /* const date = moment().format('YYYY-MM-DD HH:mm:ss'); */
    const data = {
      title: 'New task',
      text_content: transcript,
      date_target: '2020-09-25 12:00:00'
    /* "current_date": date */
    }

    fetch(url + api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      return response.json()
    })
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Voice text input</h1>
      <br/>
      <button className={styles.recorderButton} onClick={() => { SpeechRecognition.startListening({ continuous: true, language: 'ru' }) }}>Start</button>
      <button className={styles.recorderButton} onClick={ SpeechRecognition.stopListening }>Stop</button>
      <button className={styles.recorderButton} onClick={ resetTranscript }>Reset</button>
      <button className={styles.recorderButton} onClick={() => { sendText() }}>Send Text</button>
      <br/>
      <br/>
      <div className={styles.textContainer}>
        <p className={styles.text}/>
      </div>
      <br/>
    </div>
  )
}
export default Recorder
