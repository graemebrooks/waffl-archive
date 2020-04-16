import React from 'react';
import Swiper from 'react-id-swiper';

import hofImages from './hofImports';

import swiperStyles from './swiperCarousel.module.scss';

const SwiperCarousel = () => {
	const params = {
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		centeredSlides: true
	};
	return (
		<div className={swiperStyles.container}>
			<Swiper {...params} className={swiperStyles.swiper}>
				<div className={swiperStyles.swiperItem}>
					<img alt="Calvin Johnson" src={hofImages.CalvinJohnson} />
				</div>
				<div className={swiperStyles.swiperItem}>
					<img alt="Peyton Manning" src={hofImages.PeytonManning} />
				</div>
				<div className={swiperStyles.swiperItem}>
					<img alt="Jamaal Charles" src={hofImages.JamaalCharles} />
				</div>
				<div className={swiperStyles.swiperItem}>
					<img alt="Matt Forte" src={hofImages.MattForte} />
				</div>
				<div className={swiperStyles.swiperItem}>
					<img alt="Rob Gronkowski" src={hofImages.RobGronkowski} />
				</div>
				<div className={swiperStyles.swiperItem}>
					<img alt="Demarco Murray" src={hofImages.DemarcoMurray} />
				</div>
			</Swiper>
		</div>
	);
};

export default SwiperCarousel;
