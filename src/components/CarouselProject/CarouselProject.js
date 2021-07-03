import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-bootstrap';

import Image from '../Image';
import './CarouselProject.scss';

const CarouselProject = ({album}) => {

    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([]);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    useEffect(() => {

      let array = [];
      for( let i = 1; i <= album.maxNumber; i++ ){
          array.push(`${album.path}/0${i}` );
      }
      setImages( array );
    }, [album])

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

        {images.map( ( e, index ) => 
         ( 
            <Carousel.Item key={index}>
              <Image fileName={e} alt={ `${album.path}-project-image`} classStyle="project-image"/>
            </Carousel.Item>
         )
        )}
      </Carousel>
    )
}

export default CarouselProject
