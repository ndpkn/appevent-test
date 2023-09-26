import { useDispatch } from 'react-redux'
import styles from './product.module.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { addToCart, countTotal } from '../../store/cart/cartSlice'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ProductInfo, ProductProps } from '../../types'

const Product = ({
	name,
	price,
	image,
	product,
}: ProductProps): JSX.Element => {
	const [link, setLink] = useState<string>('')
	const [inCart, setInCart] = useState<boolean>(false)
	const dispatch = useDispatch()

	const addToCartItem = (item: ProductInfo) => {
		!inCart ? dispatch(addToCart(item)) : null
		dispatch(countTotal())
		setLink('/cart')
		setInCart(true)
	}

	return (
		<div className={styles.product}>
			<div className={styles.product__image}>
				<img src={image} alt='' />
			</div>
			<p className={styles.product__name}>{name}</p>
			<p className={styles.product__price}>{price} р.</p>
			<Link
				to={link}
				className={styles.product__button}
				onClick={() => addToCartItem(product)}
			>
				{inCart ? null : (
					<AddShoppingCartIcon sx={{ fontSize: '1rem' }} />
				)}

				{inCart ? 'Оформить заказ' : 'В корзину'}
			</Link>
		</div>
	)
}

export default Product
