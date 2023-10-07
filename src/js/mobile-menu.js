const hamburgerBtn = document.querySelector('[data-hamburger="mobile-menu"]')
const mobileNav = document.querySelector('[data-nav="mobile"]')
const navItems = document.querySelectorAll('[data-nav="mobile"] ul li a')
const bars = document.querySelectorAll('[data-bars*="bar"]')

const crossBars = [
	['-rotate-45', 'translate-y-[6px]'],
	['opacity-0', 'translate-x-2'],
	['rotate-45', '-translate-y-[8px]'],
]
const openColor = '#f5f0ec'
const closeColor = '#1d1d1d'

let isOpen = false

const toggleNav = () => {
	isOpen = !isOpen
	mobileNav.style.left = isOpen ? '0' : '100%'
	document.body.style.overflowY = isOpen ? 'hidden' : 'scroll'

	bars.forEach((bar, index) => {
		bar.style.backgroundColor = isOpen ? openColor : closeColor
		crossBars[index].forEach(className => bar.classList.toggle(className))
	})
}

const closeOnSelect = item => {
	item.addEventListener('click', () => toggleNav())
}
const closeOnOverlay = e => {
	if (e.target === mobileNav) {
		toggleNav()
	}
}

navItems.forEach(closeOnSelect)
hamburgerBtn.addEventListener('click', toggleNav)
window.addEventListener('click', closeOnOverlay)
