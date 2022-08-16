import { Button, Stack } from "react-bootstrap"
import { UseShoppingCart } from "../Context/shoppingCartContext"
import { Product } from "../Data/Model"
import { formatCurrency } from "../Utilities/formatCurrency"



type CartItemProps = {
    quantity: number
    product: Product
}

export default function CartItem({  quantity, product }: CartItemProps) {
    const { removeFromCart } = UseShoppingCart();

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={product.images[0]}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                {product.title} {""}
                {quantity > 1 && (
                    <span className="text-muted" style={{ fontSize: ".65rem" }}>
                        x{quantity}
                    </span>
                )}
            </div>
            <div className="text-muted" style={{ fontSize: ".75rem" }}>
                {formatCurrency(product.price)}
            </div>

            <div> {formatCurrency(product.price * quantity)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(product.id)}
            >
                &times;

            </Button>

        </Stack>
    )
}
