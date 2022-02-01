import React from 'react';
import coverImage from '../../assets/cover/iw-temp-hero.jpg.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who We Are</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          We are Irish Wristwatch, yeah, say it three times fast. Passionate music creators from Nashville, TN, here to rock your faces off. 

          Irish Wristwatch is:
          Theo Halls `(Vocals/Bass)`
          Michael Barnes `(Guitars/Background Vocals)` 
        </p>
      </div>
    </section>
  );
}

//3. about us

export default About;
