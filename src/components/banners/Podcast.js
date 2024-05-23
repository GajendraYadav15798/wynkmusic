import React from 'react';

function Podcast() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src="https://wynk-music-clone-2.netlify.app/static/media/coming-soon.142a412f718fa7ba9963.jpg"
        alt="Coming Soon"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '10px', // Border radius
          width: '900px', // Increase width
          height: '500px', // Increase height
          marginTop: '159px', // Add some top margin
        }}
      />
      <p style={{ fontSize: '24px', marginTop: '20px', color:'#fff' }}>This feature is currently unavailable.</p>
      <div style={{ padding: '10px', marginTop: '20px', display: 'inline-block' }}>
        <a href="/" style={{ color: 'white', fontSize: '25px', textDecoration: 'none', borderRadius: '5px', padding: '10px 20px', display: 'inline-block', marginBottom: '25px' }}>Back to Home</a>
      </div>
      <style>
        {`
          a {
            transition: all 0.3s ease-in-out;
          }
          a:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
      </style>
    </div>
  );
}

export default Podcast;
