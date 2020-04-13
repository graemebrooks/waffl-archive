import React from 'react';

//styles
import spinnerStyles from './spinner.module.scss';

const Spinner = ({ team }) => {
	return (
		<div className={spinnerStyles.spinner}>
			<div className={spinnerStyles.rect1} />
			<div className={spinnerStyles.rect2} />
			<div className={spinnerStyles.rect3} />
			<div className={spinnerStyles.rect4} />
			<div className={spinnerStyles.rect5} />
		</div>
	);
};

export default Spinner;
