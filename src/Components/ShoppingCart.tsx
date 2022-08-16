
import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from 'react-bootstrap';
import { UseShoppingCart } from '../Context/shoppingCartContext';
import { formatCurrency } from '../Utilities/formatCurrency';
import CartItem from './cartItem';


type ShoppingCartProps = {
    isOpen: boolean
}
export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = UseShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <OffcanvasHeader closeButton>
                <OffcanvasTitle>Your Cart</OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
                <Stack gap={3}>
                    {cartItems.map((item, index) => {
                        return (
                            <CartItem product={item.product} quantity={item.quantity} key={index} />
                        );
                    })}
                    <div className="ms-auto fw-bold fs-5">
                    Total :
                    {
                        formatCurrency(cartItems.reduce((total, item) =>
                         total + (item.product.price * item.quantity), 0))
                    }
                    </div>
                </Stack>
            </OffcanvasBody>
        </Offcanvas>
    )
}
