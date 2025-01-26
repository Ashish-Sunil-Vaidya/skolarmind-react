import { default as BICarousel } from 'react-bootstrap/Carousel';

import PropTypes from 'prop-types';
import { Heading, Text, Image, Box } from '@chakra-ui/react';

function Carousel({ data, w, h }) {
  return (
    <Box><BICarousel>
      {data.map((item, index) => (<BICarousel.Item key={index}>
        <Image src={item.img} w={w} h={h} alt="carousel" objectFit="cover"/>
        <BICarousel.Caption>
          <Heading>{item.caption}</Heading>
          <Text>
            {item.text}
          </Text>
        </BICarousel.Caption>
      </BICarousel.Item>))}
    </BICarousel></Box>
  );
}

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  w: PropTypes.string,
  h: PropTypes.string
};


export default Carousel;