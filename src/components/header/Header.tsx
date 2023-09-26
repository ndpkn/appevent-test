import styles from './header.module.scss'
import AppsIcon from '@mui/icons-material/Apps'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store/store'

const Header = () => {
	const cartList = useSelector((state: RootState) => state.cart.cartItems)

	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				<Link to='/'>
					<h2>
						AppEvent <span>test</span>
					</h2>
				</Link>
			</div>
			<div className={styles.header__buttons}>
				<Link to='/catalog'>
					<AppsIcon sx={{ fontSize: '2rem' }} />
				</Link>
				<Link to='/cart'>
					<ShoppingCartIcon sx={{ fontSize: '2rem' }} />
					<span>{cartList.length}</span>
				</Link>
			</div>
		</header>
	)
}

export default Header
