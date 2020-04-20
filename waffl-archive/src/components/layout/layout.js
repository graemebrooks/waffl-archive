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
				link={[ { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${favicon}` } ]}
			/>
			<Header />
			<div className={layoutStyles.container}>
				<div className={layoutStyles.content}>{props.children}</div>
				{/* <Footer /> */}
			</div>
		</div>
	);
};

export default Layout;
