import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
	return (
		<header className={headerStyles.header}>
			<nav>
				<ul className={headerStyles.navList}>
					<li>
						<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
							Home
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/statbook"
						>
							Statbook
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/recordbook"
						>
							Recordbook
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/draftpicks"
						>
							Draft Picks
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/trophycase"
						>
							Trophy Case
						</Link>
					</li>
					<li>
						<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/hof">
							HOF
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
