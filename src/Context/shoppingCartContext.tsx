import { createContext, useContext, ReactNode, useState } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import { Product } from "../Data/Model";


type ShoppingCartContextProps = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (product: Product) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: cartItems[]

}
type ShoppingCartProviderProps = {
    children: ReactNode
}
type cartItems = {
    product: Product
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function UseShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<cartItems[]>([])
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.product.id === id)?.quantity || 0
    }
    function increaseCartQuantity(product: Product) {
        setCartItems(currItems => {
            var cartItem = currItems.find(item => item.product.id === product.id)

            if (cartItem === undefined) {
                return [...currItems, { product: product, quantity: 1 }]
            } else {
                return currItems.map((item) => {
                    if (item.product.id === cartItem?.product.id) {
                        return { ...item, product: item.product, quantity: item.quantity + 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.product.id === id)?.quantity === 1) {
                return currItems.filter(item => item.product.id !== id)
            } else {
                return currItems.map((item) => {
                    if (item.product.id === id) {
                        return { ...item, id, quantity: item.quantity - 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.product.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartQuantity,
            cartItems,
            openCart,
            closeCart


        }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}
