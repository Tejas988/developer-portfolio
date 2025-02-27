import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

function SEO({ data }) {
	return (
		<Head>
			<title>{data.title}</title>
			<meta name="title" content={data.title} />
			<meta name="google-site-verification" content="dQ69mX2dFFE5f8Zr2bIrJUJ8WHtdhlVBUGucYtYJapU" />
			<meta name="author" content="Tejas Ghone" />
			<meta name="description" content={data.description} />
			<meta name="keywords" content={data.keywords.join(", ")} />
			<link rel="canonical" href={data.url} />
			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={data.url} />
			<meta property="og:title" content={data.title} />
			<meta property="og:description" content={data.description} />
			<meta property="og:image" content={data.image} />
			<meta property="og:site_name" content={data.title} />
			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={data.url} />
			<meta property="twitter:title" content={data.title} />
			<meta property="twitter:description" content={data.description} />
			<meta property="twitter:image" content={data.image} />
			<meta name="robots" content="Index" />
			<link rel="manifest" href="/manifest.json" />
			{/* Favicon */}
			<link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="./favicon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="./favicon.png"
			/>
			<script
				async
				src="https://code.iconify.design/1/1.0.4/iconify.min.js"
			></script>
		</Head>
	);
}

SEO.prototype = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		image: PropTypes.string,
		url: PropTypes.string,
		keywords: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};

export default SEO;
