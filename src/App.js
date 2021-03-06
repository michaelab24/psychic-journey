import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Shows from './components/Shows';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'latest',
      description: 'Check out the latest from Irish Wristwatch below including our new music video for our single "Undecided" and scan the QR code to hear our latest soundcloud releases!',
    },
    { name: 'pictures', description: 'The Watch' },
    { name: 'music', description: 'Our Latest Releases and Demos' },
    // { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            <Shows></Shows>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
