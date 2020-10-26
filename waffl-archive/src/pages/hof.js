import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/layout';
import SwiperCarousel from '../components/swiper-carousel/swiperCarousel';
import TitleBox from '../components/titleBox/titleBox';

const HOFPage = () => {
	return (
		<Layout>
			<Helmet>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
			</Helmet>
			<TitleBox title="WAFFL Hall of Fame" />
			<SwiperCarousel />
		</Layout>
	);
};

export default HOFPage;
