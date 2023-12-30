import React from 'react';
import ReactPlayer from 'react-player';
import Navbar from './Navbar';

function AuditionMaterials() {
  return (
    <div>
    <Navbar />
      <ReactPlayer
        url="/videos/gwen-stuce.mp4"
        controls={true}
        width="500px"
        height="500px"
      />
    </div>
  );
}

export default AuditionMaterials;