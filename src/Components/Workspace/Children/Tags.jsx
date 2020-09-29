import React, { useEffect } from 'react'
import styles from './TagsStyles.module.css'

const uri = 'https://garage-best-team-ever.tk'

const Tags = props => {
  const [input, setInput] = React.useState('')
  const [tags, setTags] = React.useState(props.tags)

  useEffect(() => {
    const magicTag = props.magicTag;
    if (typeof magicTag !== 'undefined' && magicTag !== '' && tags.findIndex(tag => tag.name === magicTag) === -1)
      setTags([...tags, {name: magicTag}])
    props.setAllTags(tags)
  }, [props.magicTag])
  
  const deleteTag = idTag => {
    const api = `/tag`;
    const data = {
      task_id: props.idTask,
      tag_id: idTag
    }

    console.log(uri + api)

    fetch(uri + api, {
      method: 'DELETE',
      body: JSON.stringify(data)
    }).then(response => console.log(response)).catch(e => console.log(e))
  }

  const removeTags = (idTag, indexToRemove) => {
    console.log(idTag)
    deleteTag(idTag)
    setTags([...tags.filter((_, index) => index !== indexToRemove)])
  }

  const addTags = event => {
    event.preventDefault()
    if (input !== '') {
      if (tags.findIndex(tag => tag.name === input) === -1)
        setTags([...tags, {name: input}])
    //props.selectedTags([...tags, input]) зачем это вообще здесь?
      event.target.reset()
      setInput("")
    }
  }

  return (
    <div className={styles.tagsInput}>
      <ul className={styles.tags}>
        {tags.map((tag, index) => (
          <li key={index} className={styles.tag}>
            <span className={styles.tagTitle}>{tag.name}</span>
            <span className={styles.tagRemoveIcon} onClick={() => { console.log(tag); removeTags(tag.id, index)}}>x</span>
            {props.setAllTags(tags) /*здесь теги передаются в родительский компонент*/}
          </li>
        ))}
        <form className={styles.addTag} onSubmit={event => addTags(event)}>
          <button className={styles.addTagButton} type={'submit'}>+</button>
          <input type="text" maxLength="30" placeholder="Добавьте тег" onChange={e => setInput(e.target.value)}/>
        </form>
      </ul>
    </div>
  )
}

export default Tags
