import React, { useState, useEffect } from 'react'
import styles from './TextAreaStyles.module.css'

const TextArea = (props) => {
    // Рендерящийся текст
    const [text, setText] = useState(typeof props.defaultText !== 'undefined' ? props.defaultText : '')

    // Обрабатывающаяся речь
    const [speech, setSpeech] = useState('')

    // Итоговый текст после обработки речи
    const [finalText, setFinalText] = useState('')

    // Обновление текстового поля
    useEffect(() => {
        const newSpeech = props.text

        // Когда приходит новая обработанная строка, обновляется только она
        if (typeof newSpeech !== 'undefined'){
            if (props.isListening) {
                setSpeech(newSpeech)
                setText(speech !== '' ? finalText + speech + ' ' : finalText + speech)
            }
        }

        // Как только заканчивается обработка речи, устанавливается итоговая строка - конкатенация старой строки и речи
        if (!props.isListening) {
            setFinalText(text)
            setSpeech('')
        }
    }, [props.text, props.isListening])

    useEffect(() => {
        if (!props.isListening)
            props.getText(text)
    }, [props.isListening])

    return(
        <textarea className={styles.TaskInput} value={text} 
            onChange={
                (e) => {
                    if (!props.isListening) {    
                        props.getText(e.target.value);                    
                        setText(e.target.value)
                        setFinalText(e.target.value)
                    }
                }
            }
        />
    )
}

export default TextArea