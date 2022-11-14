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
      category: 'latest',
      description: 'We are the watch.'
    },
    {
      name: 'Undecided',
      category: 'latest',
      description: 'https://www.youtube.com/watch?v=E9PXuIOsV1E'
    },
    {
      name: 'Soundcloud QR',
      category: 'latest',
      description: 'Scan to listen to our latest Demos'
    },
    {
      name: 'Theo Halls',
      category: 'pictures',
      description: 'Vocals, Synths, Bass'
    },
    {
      name: 'Pale Feet',
      category: 'pictures',
      description: 'Great shot from our video Undecided'
    },
    {
      name: '1517',
      category: 'music',
      description: 'Our most recent demo release 1517, scan QR code on home page!',
    },
    {
      name: 'This Feeling (Make a Heartbeat)',
      category: 'music',
      description: 'Our most anthemic piece.'
    },
    {
      name: 'The Promise',
      category: 'music',
      description: 'Our Soundcloud link: https://soundcloud.com/irish-wristwatch-74510498'
    },
    {
      name: 'In The End (Cloud Song)',
      category: 'music',
      description: '"In the end everything will be alright"'
    },
    {
      name: 'Love',
      category: 'music',
      description: 'Plenty of love to go around - Irish Wristwatch'
    },
    {
      name: 'Breathe',
      category: 'music',
      description: 'Our latest demo breathe'
    },
    {
      name: 'I Feel As Though',
      category: 'music',
      description: 'Demo of the song "I Feel As Though" by Irish Wristwatch, Nashville, TN.'
    },
    {
      name: 'Have a Little Faith',
      category: 'music',
      description: 'Demo of the song "Have a Little Faith" by Irish Wristwatch'
    }

    
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

//putting in a comment cuz i havent made a commit in way too long cuz i can be a lazy POS sometimes
//one of these days we add the song pics cuz fuck it why not just because
//then we figure out that widgets shit which who the fuk knows how long that will take 
//but here we are \m/