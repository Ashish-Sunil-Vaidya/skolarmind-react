import { ColumnsPhotoAlbum } from "react-photo-album";

import PropTypes from "prop-types";

const StackedImages = ({images}) =>{

      return (
        <ColumnsPhotoAlbum
          photos={images}
        />
      );
}

StackedImages.propTypes = {
    images: PropTypes.array.isRequired,
};

export default StackedImages;