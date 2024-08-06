import React from 'react';

const HomePage = async () => {
  // Simulate a time-consuming operation
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 seconds delay

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This content is loaded after a delay.</p>
    </div>
  );
};

export default HomePage;
