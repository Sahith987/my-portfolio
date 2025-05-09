import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container text-center">
        <h2>My Projects</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <h4>Katter 2.0 (Cloud Project)</h4>
            <p>Deployed on FAU Owl Cloud using Rancher.</p>
          </div>
          <div className="col-md-4">
            <h4>Blockchain Security</h4>
            <p>Research project on Blockchain technology and security.</p>
          </div>
          <div className="col-md-4">
            <h4>Biometric Authentication System</h4>
            <p>Advanced security system with biometric recognition.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
