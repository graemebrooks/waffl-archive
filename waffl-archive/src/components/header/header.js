import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<header className={headerStyles.header}>
			<h1>
				<Link className={headerStyles.title}>{data.site.siteMetadata.title}</Link>
			</h1>
			<nav>
				<ul className={headerStyles.navList}>
					<li>
						<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
							Home
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
