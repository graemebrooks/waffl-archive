import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout';
import SwiperCarousel from '../components/swiper-carousel/swiperCarousel';

const HOFPage = () => {
	return (
		<Layout>
			<Helmet>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
			</Helmet>
			<h1>WAFFL Hall of Fame</h1>
			<SwiperCarousel />
		</Layout>
	);
};

export default HOFPage;
