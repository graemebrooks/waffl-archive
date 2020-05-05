import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from '../../../static/favicon-32x32.png';

//styles
import '../../styles/index.scss';
import layoutStyles from './layout.module.scss';

//components
import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = (props) => {
	return (
		<div className={layoutStyles.index}>
			<Helmet
				meta={[
					{
						name: 'description',
						content: 'WAFFL Archive'
					},
					{
						name: 'keywords',
						content: 'football, fantasy'
					}
				]}
				link={[
					{ rel: 'icon', type: 'image/png', sizes: '32x32', href: `${favicon}` },
					{
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Cairo&family=PT+Mono&display=swap'
					}
				]}
			>
				<script src="https://kit.fontawesome.com/7046b37ec7.js" crossorigin="anonymous" />
			</Helmet>
			<Header />
			<div className={layoutStyles.container}>
				<div className={layoutStyles.content}>{props.children}</div>
				{/* <Footer /> */}
			</div>
		</div>
	);
};

export default Layout;
