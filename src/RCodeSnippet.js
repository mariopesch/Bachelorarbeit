import React from 'react';

const RCodeSnippet = () => {
  return (
    <div>
      <h3>R Code Snippet:</h3>
      <div
        style={{
          width: '100%',
          height: '100px',
          overflow: 'auto',
        }}
      >
        <iframe
        title="myFrame"
          style={{
            width: '100%',
            height: '100%',
          }}
          src="https://rdrr.io/snippets/embed/?code=print(%22Hello%2C%20world!%22)"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default RCodeSnippet;






