import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/cart/Cart'
import Catalog from './components/catalog/Catalog'
import Header from './components/header/Header'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

function App() {
	const [productList, setProductList] = useState([])
	useEffect(() => {
		axios.get('https://appevent.ru/dev/task1/catalog').then(res => {
			const allItems = res.data.items
			setProductList(allItems)
		})
	}, [])

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Catalog products={productList} />} />
				<Route
					path='catalog'
					element={<Catalog products={productList} />}
				/>
				<Route path='cart' element={<Cart />} />
			</Routes>
		</>
	)
}

export default App
