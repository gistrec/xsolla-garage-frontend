import React from 'react'
import styles from './Labels.module.css'

const Labels = props => {

    const [tags, setTags] = React.useState(props.tags);

	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
    };
    
	return (
		<div className={styles.tagsInput}>
			<ul className={styles.tags}>
				{tags.map((tag, index) => (
					<li key={index} className={styles.tag}>
						<span className={styles.tagTitle}>{tag}</span>
						<span className={styles.tagCloseIcon}
							onClick={() => removeTags(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder="Press enter to add tags"
			/>
		</div>
	);
};

export default Labels