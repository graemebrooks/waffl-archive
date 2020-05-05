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
							<i class="fas fa-home" />
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/statbook"
						>
							Statbook
							<i class="fas fa-calculator" />
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/recordbook"
						>
							Recordbook
							<i class="fas fa-book" />
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/draftpicks"
						>
							Draft Picks
							<i class="fas fa-list-ol" />
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/trophycase"
						>
							Trophy Case
							<i class="fas fa-trophy" />
						</Link>
					</li>
					<li>
						<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/hof">
							HOF
							<i class="fas fa-award" />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
