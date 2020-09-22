import React from 'react'
import styles from './Labels.module.css'

const Labels = props => {
  const [input, setInput] = React.useState('')
  const [labels, setLabels] = React.useState(props.labels)
  const removeLabels = indexToRemove => {
    setLabels([...labels.filter((_, index) => index !== indexToRemove)])
  }

  const addLabels = event => {
    event.preventDefault()
    if (input !== '') {
      setLabels([...labels, input])
      props.selectedLabels([...labels, input])
    }
  }

  return (
    <div className={styles.labelsInput}>
      <ul className={styles.labels}>
        {labels.map((label, index) => (
          <li key={index} className={styles.label}>
            <span className={styles.labelTitle}>{label}</span>
            <span className={styles.labelCloseIcon} onClick={() => removeLabels(index)}>x</span>
          </li>
        ))}
        <form className={styles.addLabel} onSubmit={event => addLabels(event)} onKeyUp={event => event.key === 'Enter' ? addLabels(event) : null}>
          <button className={styles.buttonPlus} type={'submit'}>+</button>
          <input type="text"
            placeholder="Press enter to add labels"
            onChange={e => setInput(e.target.value)}/>
        </form>
      </ul>
    </div>
  )
}

export default Labels
