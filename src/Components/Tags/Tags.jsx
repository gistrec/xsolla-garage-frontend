import React from 'react'
import styles from './Tags.module.css'

const Tags = props => {
  const [input, setInput] = React.useState('')
  const [tags, setTags] = React.useState(props.tags)
  
  const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)])
  }

  const addTags = event => {
    event.preventDefault()
    if (input !== '') {
      setTags([...tags, input])
      props.selectedTags([...tags, input])
      event.target.reset()
    }
  }

  return (
    <div className={styles.tagsInput}>
      <ul className={styles.tags}>
        {tags.map((tag, index) => (
          <li key={index} className={styles.tag}>
            <span className={styles.tagTitle}>{tag}</span>
            <span className={styles.tagRemoveIcon} onClick={() => removeTags(index)}>x</span>
          </li>
        ))}
        <form className={styles.addTag} onSubmit={event => addTags(event)}>
          <button className={styles.addTagButton} type={'submit'}>+</button>
          <input type="text" placeholder="Add a tag here" onChange={e => setInput(e.target.value)}/>
        </form>
      </ul>
    </div>
  )
}

export default Tags
