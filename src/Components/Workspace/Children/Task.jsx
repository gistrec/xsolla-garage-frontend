import React, { useEffect, useState } from 'react'
import styles from './TaskStyles.module.css'
import Tags from './Tags'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import moment from 'moment'

const Task = ({ id, title, bodyTask, tags }) => {
  const url = 'https://garage-best-team-ever.tk'

  const [on, setOn] = useState(true)
  const { transcript, finalTranscript, listening, resetTranscript } = useSpeechRecognition()

  // Айдишник задачи, помещаемый в state после рендера компонента
  const [taskId, setId] = useState(-1)
  useEffect(() => { console.log(id); setId(id) }, [])

  // Рендерит теги только если они есть
  const renderTags = () => {
    if (typeof tags !== 'undefined') { return (<Tags selectedTags={selectedTags} tags={tags.map(tag => tag.name)}/>) }
  }

  const renderTranscript = () => {
    if (!on)
      return transcript;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  function handleClick (e) {
    e.preventDefault()
    resetTranscript();
    setOn(on => !on)
    console.log(on)
    if (on === true) {
      SpeechRecognition.startListening({ continuous: true, language: 'ru' })
    } else if (on === false) {
      SpeechRecognition.stopListening()
      console.log(on + ' recording stopped')
    }
  }

  /* const url = 'https://garage-analytical-back.herokuapp.com'

  const sendText = () => {
    const api = '/date_tags'
    const date = moment().format('YYYY-MM-DD HH:mm:ss')
    const data = {
      text_content: transcript,
      current_date: date
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
  } */

  const deleteTask = () => {
    const api = `/task/${taskId}`

    fetch(url + api, {
      method: 'DELETE'
    })
  }

  const selectedTags = tags => {
    console.log(tags)
  }

  return (
    <div className={styles.TaskContainer}>
      <details>
        <summary className={styles.TaskTitleContainer}>
          <div className={styles.CheckboxTitleWrapper}>
            <input type="checkbox" className={styles.Checkbox}/>
            <div className={styles.TitleDataWrapper}>
              <input maxLength="100" placeholder="Добавьте название задачи" className={styles.Title} defaultValue={title}/>
              <time>2020-09-20, 12:00</time>
            </div>
          </div>
          <div className={styles.Icons}>
            <button className={styles.IconWrapper}>
              <svg className={styles.Icon} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1H18V3H5V1ZM0 0.5H3V3.5H0V0.5ZM0 7.5H3V10.5H0V7.5ZM0 14.5H3V17.5H0V14.5ZM5 8H18V10H5V8ZM5 15H18V17H5V15Z" fill="#747E8A"/>
              </svg>
            </button>
            <button className={styles.IconWrapper} onClick={(e) =>
              handleClick(e)} >
              <svg fill="none" className={styles.Icon} width="18" height="22" viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg">
                <path fill={on === false ? '#eb002f' : '#747E8A'} d="M8.99993 2C8.20428 2 7.44122 2.31607 6.87861 2.87868C6.316 3.44129 5.99993 4.20435 5.99993 5V9C5.99993 9.79565 6.316 10.5587 6.87861 11.1213C7.44122 11.6839 8.20428 12 8.99993 12C9.79558 12 10.5586 11.6839 11.1213 11.1213C11.6839 10.5587 11.9999 9.79565 11.9999 9V5C11.9999 4.20435 11.6839 3.44129 11.1213 2.87868C10.5586 2.31607 9.79558 2 8.99993 2ZM8.99993 0C9.65654 0 10.3067 0.129329 10.9133 0.380602C11.52 0.631876 12.0712 1.00017 12.5355 1.46447C12.9998 1.92876 13.3681 2.47995 13.6193 3.08658C13.8706 3.69321 13.9999 4.34339 13.9999 5V9C13.9999 10.3261 13.4731 11.5979 12.5355 12.5355C11.5978 13.4732 10.326 14 8.99993 14C7.67385 14 6.40208 13.4732 5.4644 12.5355C4.52672 11.5979 3.99993 10.3261 3.99993 9V5C3.99993 3.67392 4.52672 2.40215 5.4644 1.46447C6.40208 0.526784 7.67385 0 8.99993 0ZM0.0549316 10H2.06993C2.31222 11.6648 3.1458 13.1867 4.41816 14.2873C5.69053 15.3879 7.31661 15.9936 8.99893 15.9936C10.6813 15.9936 12.3073 15.3879 13.5797 14.2873C14.8521 13.1867 15.6856 11.6648 15.9279 10H17.9439C17.7166 12.0287 16.8066 13.9199 15.3631 15.3635C13.9197 16.8071 12.0286 17.7174 9.99993 17.945V22H7.99993V17.945C5.97107 17.7176 4.07972 16.8074 2.63611 15.3638C1.1925 13.9202 0.282344 12.0289 0.0549316 10Z"/>
              </svg>
            </button>
            <button className={styles.IconWrapper}>
              <svg className={styles.Icon} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.828 5.75699L7.17204 11.414C7.07653 11.5062 7.00035 11.6166 6.94794 11.7386C6.89553 11.8606 6.86795 11.9918 6.86679 12.1246C6.86564 12.2574 6.89094 12.3891 6.94122 12.5119C6.9915 12.6348 7.06576 12.7465 7.15965 12.8404C7.25354 12.9343 7.36519 13.0085 7.48809 13.0588C7.61098 13.1091 7.74267 13.1344 7.87544 13.1332C8.00822 13.1321 8.13944 13.1045 8.26145 13.0521C8.38345 12.9997 8.4938 12.9235 8.58604 12.828L14.243 7.17199C14.8057 6.60934 15.1218 5.84621 15.1218 5.05049C15.1218 4.25478 14.8057 3.49165 14.243 2.92899C13.6804 2.36634 12.9173 2.05024 12.1215 2.05024C11.3258 2.05024 10.5627 2.36634 10 2.92899L4.34304 8.58599C3.86912 9.04812 3.49167 9.59975 3.2326 10.2089C2.97353 10.818 2.83799 11.4725 2.83384 12.1345C2.82969 12.7964 2.95702 13.4526 3.20844 14.0649C3.45986 14.6772 3.83036 15.2336 4.29846 15.7016C4.76655 16.1696 5.32293 16.54 5.9353 16.7914C6.54767 17.0427 7.20385 17.1699 7.86578 17.1657C8.52771 17.1615 9.1822 17.0258 9.7913 16.7667C10.4004 16.5075 10.952 16.13 11.414 15.656L17.071 9.99999L18.485 11.414L12.828 17.071C12.178 17.721 11.4063 18.2367 10.557 18.5885C9.70764 18.9403 8.79734 19.1214 7.87804 19.1214C6.95874 19.1214 6.04844 18.9403 5.19912 18.5885C4.3498 18.2367 3.57809 17.721 2.92804 17.071C2.278 16.4209 1.76236 15.6492 1.41056 14.7999C1.05875 13.9506 0.877686 13.0403 0.877686 12.121C0.877686 11.2017 1.05875 10.2914 1.41056 9.44207C1.76236 8.59275 2.278 7.82104 2.92804 7.17099L8.58604 1.51499C9.52905 0.604204 10.7921 0.100232 12.103 0.111624C13.414 0.123016 14.6681 0.648861 15.5951 1.5759C16.5222 2.50294 17.048 3.757 17.0594 5.06799C17.0708 6.37897 16.5668 7.64198 15.656 8.58499L10 14.244C9.72138 14.5226 9.39057 14.7436 9.0265 14.8943C8.66243 15.0451 8.27223 15.1226 7.87819 15.1226C7.48414 15.1226 7.09397 15.0449 6.72993 14.8941C6.3659 14.7432 6.03514 14.5222 5.75654 14.2435C5.47794 13.9648 5.25696 13.634 5.10621 13.27C4.95546 12.9059 4.87789 12.5157 4.87794 12.1216C4.87798 11.7276 4.95564 11.3374 5.10648 10.9734C5.25732 10.6094 5.47838 10.2786 5.75704 9.99999L11.414 4.34299L12.828 5.75699Z" fill="#747E8A"/>
              </svg>
            </button>
          </div>
        </summary>

        <textarea className={styles.TaskInput} value={renderTranscript()}/>
        <div className={styles.TaskActions}>
          {
            // Если теги переданы, то они рендерятся
            renderTags()
          }
          <div className={styles.DelAndSave}>
            <button className={styles.DelIconContainer}>
              <svg className={styles.Icon + ' ' + styles.IconBottom + ' ' + styles.IconSave} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5,21h14c1.104,0,2-0.896,2-2V8l-5-5H5C3.896,3,3,3.896,3,5v14C3,20.104,3.896,21,5,21z M7,5h4v2h2V5h2v4h-1h-1h-2H9H7V5z M7,13h10v6h-2H9H7V13z" fill="#747E8A"/>
              </svg>
            </button>
            <button className={styles.DelIconContainer} onClick={ deleteTask }>
              <svg className={styles.Icon + ' ' + styles.IconBottom} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 8v12c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2V8c0 0-.447 0-1 0H6C5.447 8 5 8 5 8zM3 6L8 6 16 6 21 6 21 4 16.618 4 15 2 9 2 7.382 4 3 4z" fill="#747E8A"/>
              </svg>
            </button>
          </div>
        </div>
      </details>
    </div>

  )
}
export default Task
