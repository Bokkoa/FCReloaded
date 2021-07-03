import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {Button, Modal} from 'react-bootstrap';
import CarouselProject from '../CarouselProject';

import './ModalProject.scss';

const ModalProject = ({name, album}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button block variant="primary" 
                onClick={handleShow}>
          IMAGENES
        </Button>
  
        <Modal show={show} 
               size='xl'
               onHide={handleClose} 
               centered>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <CarouselProject album={album} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Volver
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

ModalProject.propTypes = {
  name: PropTypes.string
}

export default ModalProject
