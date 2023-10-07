const templateElement = document.querySelector('[data-productsTemplate="products"]')
const selectInput = document.querySelector('#selectPerSize')
const boxProducts = document.querySelector('[data-boxProducts="box"]')

let currentPage = 1
let fetchedItems = []
let itemsPerPage = 20
let isFetching = false

const fetchData = async () => {
	const URL = `https://brandstestowy.smallhost.pl/api/random?pageNumber=${currentPage}&pageSize=${itemsPerPage}`
	try {
		isFetching = true
		const res = await fetch(URL)
		if (!res.ok) {
			throw new Error('Fetch failed')
		}
		const resData = await res.json()

		fetchedItems = [resData]
		createProducts()
		currentPage++
	} catch (error) {
		console.error(error)
	}
	isFetching = false
}

const createProducts = () => {
	for (const itemArr of fetchedItems) {
		for (let i = 0; i < itemArr.data.length; i++) {
			const container = templateElement.content.cloneNode(true)
			const product = container.querySelector('[data-product="product"]')
			const item = itemArr.data[i]
			product.textContent = `ID: ${item.id}`
			boxProducts.appendChild(container)
		}
	}
}

const loadMoreItems = () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
		if (isFetching) return
		fetchData()
	}
}

const updateItemsPerPage = () => {
	const allProducts = boxProducts.querySelectorAll('[data-product="product"]')
	allProducts.forEach(item => item.remove())
	currentPage = 1
}

const setItemsPerpage = () => {
	itemsPerPage = selectInput.value
	updateItemsPerPage()
	fetchData()
}

selectInput.addEventListener('change', setItemsPerpage)
window.addEventListener('scroll', loadMoreItems)
