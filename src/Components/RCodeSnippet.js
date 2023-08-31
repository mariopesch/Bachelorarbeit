import React from 'react';

// Einbindung des rdrr.io Code Snippets

const RCodeSnippet = ({ rcode }) => {

  return (
    <div>
      <h3>R Code Snippet:</h3>
      <div
        style={{
          width: '100%',
          height: '200px',
          overflow: 'auto',
        }}
      >
        <iframe
        title="myFrame"
          style={{
            width: '100%',
            height: '100%',
            
          }}
          src={`https://rdrr.io/snippets/embed/?code=${encodeURIComponent(
          rcode
        )}`}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
  
};

export default RCodeSnippet;






