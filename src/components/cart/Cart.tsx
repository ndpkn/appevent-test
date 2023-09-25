import { useDispatch, useSelector } from 'react-redux'
import styles from './cart.module.scss'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { RootState } from '../../store/store'
import { countTotal, removeFromCart } from '../../store/cart/cartSlice'
import { ProductInfo } from '../../types'

const Cart = () => {
	const dispatch = useDispatch()
	const cartList = useSelector((state: RootState) => state.cart.cartItems)
	const total = useSelector((state: RootState) => state.cart.total)

	const removeItem = (item: ProductInfo) => {
		dispatch(removeFromCart(item))
		dispatch(countTotal())
	}
	
  return (
		<div className={styles.cart}>
			{cartList.length ? (
				<>
					<h2 className={styles.cart__header}>Корзина</h2>
					<table className={styles.cart__table}>
						<thead>
							<tr>
								<th>Название</th>
								<th>Стоимость</th>
							</tr>
						</thead>
						<tbody>
							{cartList.map((item, i) => {
								return (
									<tr key={i}>
										<td>{item.name}</td>
										<td>{item.price} р.</td>
										<td
											className={styles.cart__tableTrash}
											onClick={() => removeItem(item)}
										>
											<DeleteForeverIcon />
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
					<p className={styles.cart__total}>
						<span>Итого: </span>
						{total} р.
					</p>
				</>
			) : (
				<h2 className={styles.cart__header} style={{textAlign: 'center'}}>Корзина пуста</h2>
			)}
		</div>
  )
}

export default Cart