import { useContext } from 'react';
import { Card, Button, Form, Row, Col  } from 'react-bootstrap';
import {CartContext} from '../context/CardContext';


function ProductItem( { product } ) {    
   const cart = useContext( CartContext );
   const productQuantity = cart.getProductQuantity(product.id);
    return (
        <Card className='mt-5 card-bg'>
            <Card.Body>
                <Card.Img style={{ objectFit: 'cover'}} variant='top' src={product.image} height='200px'/>
                <Card.Title className="text-light pt-4" align='right'>{product.title} </Card.Title>
                <Card.Text className="text-light" align='right' dir='rtl'> {product.price} تومان </Card.Text>
                
                {productQuantity > 0 ? (
                    <>
                    <Form as={Row}>
                        <Form.Label column='true' sm='6' className='text-white'>
                            تعداد {productQuantity}
                        </Form.Label>
                        <Col sm='6'>
                            <Button onClick={()=> cart.addItemToCart(product.id)} variant='btn btn-outline-secondary' sm='6' className='mx-2 text-white'>+</Button>
                            <Button onClick={()=> cart.removeItemFromCart(product.id)}  variant='btn btn-outline-secondary' sm='6' className='mx-2 text-white'>-</Button>
                        </Col>
                    </Form>
                    <Button onClick={ ()=> cart.deleteFromCart(product.id)} className='my-4' variant='btn btn-light'> حذف از سبد خرید </Button>
                    </>
                ): (
                    <Button onClick={() => cart.addItemToCart(product.id) } className='text-white' variant='btn btn-outline-secondary'>افزودن به سبد خرید</Button>
                )}
            </Card.Body>
        </Card>
    )

}

export default ProductItem;