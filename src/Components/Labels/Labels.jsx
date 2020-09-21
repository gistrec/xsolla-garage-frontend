import React from 'react'
import styles from './Labels.module.css'

const Labels = props => {

    const [labels, setLabels] = React.useState(props.labels)

	const removeLabels = indexToRemove => {
		setLabels([...labels.filter((_, index) => index !== indexToRemove)])
    };
    
	const addLabels = event => {
		if (event.target.value !== "") {
			setLabels([...labels, event.target.value])
			props.selectedLabels([...labels, event.target.value])
			event.target.value = "";
		}
    };
    
	return (
		<div className={styles.labelsInput}>
			<ul className={styles.labels}>
				{labels.map((label, index) => (
					<li key={index} className={styles.label}>
						<span className={styles.labelTitle}>{label}</span>
						<span className={styles.labelCloseIcon} onClick={() => removeLabels(index)}>x</span>
					</li>
				))}
			</ul>
			<input type="text" onKeyUp={event => event.key === "Enter" ? addLabels(event) : null} placeholder="Press enter to add labels"/>
		</div>
	);
};

export default Labels