import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    //1.add rest of photos start with commercial, index stars at 0
    //2. fix all pages to show correct stuff/fix categories (music, pics, not food and portraits)
    {
      name: 'Irish Wristwatch',
      category: 'commercial',
      description: 'We are the watch.'
    },
    {
      name: 'Undecided',
      category: 'commercial',
      description: 'https://www.youtube.com/watch?v=E9PXuIOsV1E'
    },
    {
      name: 'Soundcloud QR',
      category: 'commercial',
      description: 'Scan to listen to our latest Demos'
    },
    {
      name: 'Theo Halls',
      category: 'portraits',
      description: 'Vocals, Synths, Bass'
    },
    {
      name: 'Pale Feet',
      category: 'portraits',
      description: 'Great shot from our video Undecided'
    },
    {
      name: '1517',
      category: 'food',
      description: 'Our most recent demo release 1517, scan QR code on home page!',
    },
    {
      name: 'This Feeling (Make a Heartbeat)',
      category: 'food',
      description: 'Our most anthemic piece.'
    },
    {
      name: 'The Promise',
      category: 'food',
      description: 'Our Soundcloud link: https://soundcloud.com/irish-wristwatch-74510498'
    },
    {
      name: 'In The End (Cloud Song)',
      category: 'food',
      description: '"In the end everything will be alright"'
    },
    {
      name: 'Love',
      category: 'food',
      description: 'Plenty of love to go around - Irish Wristwatch'
    },

    // {
    //   name: 'Green river',
    //   category: 'landscape',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Docks',
    //   category: 'landscape',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Panoramic village by sea',
    //   category: 'landscape',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Domestic landscape',
    //   category: 'landscape',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: 'Park bench',
    //   category: 'landscape',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
