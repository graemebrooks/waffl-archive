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
		}
	};
	return (
		<div className={swiperStyles.hofSwiper}>
			<Swiper {...params}>
				<div className={swiperStyles.swiperItem}>
					<img src={hofImages.CalvinJohnson} />
				</div>
				<div>
					<img src={hofImages.PeytonManning} />
				</div>
				<div>
					<img src={hofImages.JamaalCharles} />
				</div>
				<div>
					<img src={hofImages.MattForte} />
				</div>
				<div>
					<img src={hofImages.RobGronkowski} />
				</div>
				<div>
					<img src={hofImages.DemarcoMurray} />
				</div>
			</Swiper>
		</div>
	);
};

export default SwiperCarousel;
