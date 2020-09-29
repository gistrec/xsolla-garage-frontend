import React, { useEffect } from 'react'
import styles from './TagsStyles.module.css'

const uri = 'https://garage-best-team-ever.tk'

const Tags = props => {
  const [input, setInput] = React.useState('')
  const [tags, setTags] = React.useState(props.tags)

  useEffect(() => {
    if (typeof props.magicTag === 'undefined')
      return;
    const magicTag = props.magicTag.toLowerCase();
    postTag(magicTag)
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

    fetch(uri + api, {
      method: 'DELETE',
      body: JSON.stringify(data)
    });
  }

  const removeTags = (idTag, indexToRemove) => {
    deleteTag(idTag)
    setTags([...tags.filter((_, index) => index !== indexToRemove)])
  }

  const postTag = nameTag => {
    const api = `/tag`;
    const data = {
      task_id: props.idTask,
      tags: [{
        name: nameTag
      }]
    }

    fetch(uri + api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }

  const addTags = event => {
    event.preventDefault()
    const newTag = input.toLowerCase();
    postTag(newTag)
    if (newTag !== '') {
      if (tags.findIndex(tag => tag.name === newTag) === -1)
        setTags([...tags, {name: newTag}])
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
            <span className={styles.tagRemoveIcon} onClick={() => removeTags(tag.id, index)}>x</span>
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
