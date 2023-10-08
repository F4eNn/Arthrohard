const animateSections = document.querySelectorAll('[data-animation]')
const desktopNav = document.querySelectorAll('[data-nav="desktop"] > li')

gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()

animateSections.forEach(section => {
	gsap.to(section, {
		scrollTrigger: {
			trigger: section,
			toggleActions: 'play none none none',
			start: '150px bottom',
		},
		y: 0,
		opacity: 1,
		duration: 0.75,
	})
})
desktopNav.forEach((item, idx) =>
	gsap.to(item, { opacity: 1, duration: 1, stagger: 0.2, y: 0, delay: 0.3 * (idx - 0.1), ease: 'back' }),
)

export const animatePopup = isOpen => {
	if (isOpen) {
		const onMount = gsap.fromTo('[data-overlay]', { y: '100%', opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 })
	} else {
		const onUnMount = gsap.to('[data-overlay]', { y: '100%', opacity: 0, duration: 0.3 })
	}
}
export const mobileNavAnimation = isOpen => {
	if (isOpen) {
		tl.fromTo(
			'[data-nav="mobile"] > ul > li',
			{ opacity: 0, x: 100 },
			{ opacity: 1, stagger: 0.2, delay: 0.2, x: 0, duration: 0.8, ease: 'back' },
		)
	} else {
		tl.clear()
	}
}
