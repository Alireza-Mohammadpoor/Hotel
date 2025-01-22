


import React from 'react';

const Chose = (props) => {
  return (
    <div
      style={{
        backgroundColor: 'inherit',
        boxShadow: '0 2px 4px hsl(0, 0%, 50%)',
        width: '300px',
        borderRadius: '7px',
        height: '320px',
        border: '1.5px solid hsl(0, 0%, 50%)',
        padding: '1px',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '5px', overflow: 'hidden' }}>
        {/* Image */}
        <img
          src={props.ImageSrc}
          alt="img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(38%)', // Darkens the image
          }}
        />
        {/* Optional Overlay Text (if needed) */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          {props.header}
        </div>
      </div>

      {/* Header */}
      {/* <h1
        style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          margin: '10px 10px',
        }}
      >
        {props.header}
      </h1> */}

      {/* Paragraph */}
      <p
        style={{
          fontSize: '0.8rem',
          fontWeight: '600',
          margin: '20px 15px',
        }}
      >
        {props.paragraph}
      </p>
    </div>
  );
};

export default Chose;
