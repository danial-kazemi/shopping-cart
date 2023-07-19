import { useState } from 'react';
import { Navbar as NavbarBs, Button, Modal, ModalBody } from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'
function Navbar() {    
const [showModal, setShowModal] = useState(false);
const handelModalShow = () => { setShowModal(true) }
const handelModalClose = () => { setShowModal(false) }
    return(
        <>        
            <NavbarBs className='border-bottom border-secondary'>
                <NavbarBs.Collapse className='justify-content-end'>
                    <Button onClick={handelModalShow} className='text-white' variant='btn btn-outline-secondary'> <BsCart className='mx-2'></BsCart>سبد خرید</Button>
                </NavbarBs.Collapse>
            </NavbarBs>
            <Modal show={showModal} onHide={handelModalClose} contentClassName='card-bg' dir='rtl'> 
            <Modal.Header closeButton closeVariant='white'>
                <Modal.Title> سبد خرید </Modal.Title>
                <ModalBody>
                    محصول
                </ModalBody>
            </Modal.Header>
             </Modal>
        </>
    )
}
export default Navbar;