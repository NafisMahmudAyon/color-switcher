
import React from 'react';

function MyComponent() {
  const styles = [
    { selector: 'h1', color: '#333', marginBottom: '10px' },
    { selector: 'p', color: '#666', fontSize: '16px' },
    { selector: 'div:hover', backgroundColor: '#DDD' },
  ];

  const css = styles.map(style => {
    const { selector, ...properties } = style;
    const cssProperties = Object.entries(properties).map(([key, value]) => `${key}: ${value};`).join(' ');
    return `${selector} { ${cssProperties} }`;
  }).join(' ');

  return (
    <div>
      <h1>My Component</h1>
      <p>This is some text in my component.</p>
      <style>{css}</style>
    </div>
  );
}