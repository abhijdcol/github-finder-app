import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React App to search Github profiles and see profile details. This
        project is part of the
        <a href="https://www.udemey.com/course/modern-react-front-to-back/">
          {" "}
          React Front to Back
        </a>{" "}
        udemey course by
        <strong>
          <a href="https://traversymedia.com">Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
    </div>
  );
}

export default About;
