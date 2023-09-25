import { CatalogProps, ProductType } from '../../types'
import Product from '../product/Product'
import styles from './catalog.module.scss'

const Catalog = ({ products }: CatalogProps): JSX.Element => {
  
  return (
		<div className={styles.catalog}>
			<h2 className={styles.catalog__header}>Каталог товаров</h2>
			<div className={styles.catalog__products}>
				{products.map((item: ProductType) => {
					return <Product key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} product={item} />
				})}
			</div>
		</div>
	)
}

export default Catalog
