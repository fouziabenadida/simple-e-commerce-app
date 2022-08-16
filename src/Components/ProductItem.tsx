
import { Button, Card } from 'react-bootstrap'
import { Product } from '../Data/Model'
import { formatCurrency } from '../Utilities/formatCurrency'
import { UseShoppingCart } from '../Context/shoppingCartContext'

export default function ProductItem(product: Product) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = UseShoppingCart()
    const quantity = getItemQuantity(product.id)
    return (
        <>

            <Card className='h-100'>
                <Card.Img
                    variant="top"
                    src={product.images[0]} height="200px"
                    style={{ objectFit: "cover" }} />
                <Card.Body className='d-flex flex-column' >
                    <Card.Title className='d-flex justify-content-between align-itemsbaseline mb-4'>
                        <span className='fs-2'>{product.title}</span>
                        <span className='ms-2 text-muted'>{formatCurrency(product.price)}</span>
                    </Card.Title>
                    <div className='mt-auto'>
                        {quantity === 0 ? (
                            <Button className='w-100' onClick={() => increaseCartQuantity(product)} >+ Add To Cart</Button>
                        ) : <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem" }}>
                            <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }} >
                                <Button onClick={() => decreaseCartQuantity(product.id)}  >-</Button>
                                <div>
                                    <span className='fs-3'>{quantity}</span> in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(product)} >+</Button>
                            </div>
                            <Button variant='danger' size='sm' onClick={() => removeFromCart(product.id)}>Remove</Button>
                        </div >}
                    </div>
                </Card.Body>
            </Card>


        </>
    )
}




