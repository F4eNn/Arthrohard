const animateSections = document.querySelectorAll('[data-animation]')
gsap.registerPlugin(ScrollTrigger)

animateSections.forEach(section => {
	gsap.fromTo(
		section,
		{
			y: 100,
			opacity: 0,
		},
		{
			scrollTrigger: {
				trigger: section,
				toggleActions: 'play none none none',
				start: '150px bottom',
			},
			y: 0,
			opacity: 1,
			duration: 0.75,
		},
	)
})
