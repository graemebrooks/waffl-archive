import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import headerStyles from './header.module.scss';

const Menu = styled.div`
	bmBurgerButton: {
		position: 'fixed';
		width: '36px';
		height: '30px';
		left: '36px';
		top: '36px';
	}
	bmBurgerBars: {
		background: '#17b978';
	}
	bmBurgerBarsHover: {
		background: '#a90000';
	}
	bmCrossButton: {
		height: '24px';
		width: '24px';
	}
	bmCross: {
		background: '#bdc3c7';
	}
	bmMenuWrap: {
		position: 'fixed';
		height: '100%';
	}
	bmMenu: {
		background: '#213642';
		padding: '1.5em 0.75em 0';
		fontSize: '1.15em';
	}
	bmMorphShape: {
		fill: '#373a47';
	}
	bmItemList: {
		color: '#b8b7ad';
		height: '100%';
		display: 'flex';
		outline: 'none';
	}
	bmItem: {
		height: '10vh';
		outline: 'none';
	}
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)';
	}
`;

const Header = () => {
	return (
		<Menu
			className={headerStyles.navDrawer}
			pageWrapId={'page-wrap'}
			outerContainerId={'outer-container'}
		>
			<ul className={headerStyles.navList}>
				<li className="menu-item">
					<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
						<i class="fas fa-home" />
						Home
					</Link>
				</li>
				<li className="menu-item">
					<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/statbook">
						<i class="fas fa-calculator" />
						Statbook
					</Link>
				</li>
				<li className="menu-item">
					<Link
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						to="/recordbook"
					>
						<i class="fas fa-book" />
						Recordbook
					</Link>
				</li>
				<li className="menu-item">
					<Link
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						to="/draftpicks"
					>
						<i class="fas fa-list-ol" />
						Draft Picks
					</Link>
				</li>
				<li className="menu-item">
					<Link
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						to="/trophycase"
					>
						<i class="fas fa-trophy" />
						Trophy Case
					</Link>
				</li>
				<li className="menu-item">
					<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/hof">
						<i class="fas fa-award" />
						HOF
					</Link>
				</li>
			</ul>
		</Menu>
	);
};

export default Header;
