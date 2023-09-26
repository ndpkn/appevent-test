export interface CartItem {
  name: string,
  price: number,
  id: number
}

export interface CartItems {
  cartItems: CartItem[]
  total: number
}

export interface ProductType {
  name: string
  price: number
  image: string
  id: number
}

export interface CatalogProps {
  products: ProductType[]
}

export interface ProductInfo {
  name: string
  price: number
  image?: string
  id: number
}

export interface ProductProps {
  name: string
  price: number
  image?: string
  id: number
  product: ProductInfo
}