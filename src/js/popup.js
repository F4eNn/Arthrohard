import { allAvailableProducts } from './products.js'
const popup = document.querySelector('[data-overlay]')
const closeBtn = document.querySelector('#closeBtn')
const fields = document.querySelectorAll('[data-content*="popup"]')

let currentItem = null

const getRelevantProduct = e => {
	if (e.target.hasAttribute('data-product')) {
		e.preventDefault()
		const productID = e.target.textContent.split(' ')[1]
		for (const item of allAvailableProducts) {
			const relevantItem = item.data.find(i => {
				return i.id === Number(productID)
			})
			if (relevantItem) {
				currentItem = relevantItem
			}
		}
		setPopup()
		togglePopup()
	}
}
const setPopup = () => {
	fields[0].textContent = currentItem.id
	fields[1].textContent = currentItem.name
	fields[2].textContent = currentItem.value
}

const togglePopup = () => popup.classList.toggle('hide')

const closeOnOverlay = e => {
	if (e.target.hasAttribute('data-overlay')) {
		togglePopup()
	}
}

closeBtn.addEventListener('click', togglePopup)
window.addEventListener('click', closeOnOverlay)
window.addEventListener('click', getRelevantProduct)
