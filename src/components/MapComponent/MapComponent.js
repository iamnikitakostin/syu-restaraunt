import React from 'react';

const MapComponent = () => {
  return (
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.334493455174!2d-123.14982652351729!3d49.17523907137683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54860b29f77cc8ff%3A0x75e8fe4af54b345e!2s%E4%BF%AE%20SYU%20Japanese%20Cuisine%20%26%20Sushi%20Bar!5e0!3m2!1sen!2sca!4v1707166580911!5m2!1sen!2sca"
        width="400"
        height="400"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  );
};

export default MapComponent;
