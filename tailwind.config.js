module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				red: '#ab303c',
				gray: '#9c9c9c',
				black: '#1d1d1d',
				green: '#30ab4c',
				darkWhite: '#f6f6f6',
				white: '#ffff',
				smoke: '#d9d9d9',
				brown: '#bebebe',
			},
			fontSize: {
				heading: '120px',
				heading2: '48px',
				heading3: '31px',
				normal: '20px',
			},
			screens: {
				vsm: '425px',
			},
			backgroundImage: {
				parallax: "url('/assets/minify-images/section-dog.webp')",
			},
		},
	},

	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
	],
}
