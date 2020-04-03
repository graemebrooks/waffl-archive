import React from 'react';

//styles
import '../../styles/index.scss';
import layoutStyles from './layout.module.scss';

//components
import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = (props) => {
	return (
		<div className={layoutStyles.index}>
			<Header />
			<div className={layoutStyles.container}>
				<div className={layoutStyles.content}>{props.children}</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
