import React from 'react';
import MyNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <MyNavbar />
      <div className="mt-5 pt-5 text-center">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a professional portfolio website built using React and Bootstrap.</p>
      </div>
    </div>
  );
}

export default App;
