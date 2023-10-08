const sections = document.querySelectorAll('[data-nav*="scroll-spy"]')
const menuLinks = document.querySelectorAll('a')

const handleScrollSpy = () => {
	const sectionItems = []
	sections.forEach(s => {
		if (window.scrollY <= s.offsetTop + s.offsetHeight - 122) {
			sectionItems.push(s)
			const currentSection = document.querySelector(`[href*="${sectionItems[0].id}"]`)
			menuLinks.forEach(item => item.classList.remove('active'))
			if (!currentSection) return
			currentSection.classList.add('active')
		}
	})
}

window.addEventListener('scroll', handleScrollSpy)
