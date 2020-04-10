import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SwiperCarousel from '../components/swiper-carousel/swiperCarousel';

const HOFPage = () => {
	return (
		<Layout>
			<Helmet>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
			</Helmet>
			<h1>WAFFL Hall of Fame</h1>
			<p>This is a demo application for the purpose of learning GatsbyJS</p>
			<p>
				For any questions, feel free to <Link to="/contact">contact me</Link>
			</p>
			<SwiperCarousel className="swiperContainer" />
		</Layout>
	);
};

export default HOFPage;
