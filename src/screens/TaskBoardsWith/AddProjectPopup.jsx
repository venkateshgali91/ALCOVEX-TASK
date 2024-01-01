//AddProjectPopup.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddProjectPopup({ onClose, onAddProject }) {
  const [projectName, setProjectName] = useState('');
{"build": "parcel build --public-url ./ --no-scope-hoist",
"dev": "parcel",
//"storybook": "storybook dev -p 6006",
//"build-storybook": "storybook build"}
  const handleAddProject = () => {
    // Perform validation if needed
    if (projectName.trim() !== '') {
      onAddProject(projectName);
      onClose();
    }
  };

  return (
    <div className="popup">
      <h2>Add New Project</h2>
      <label htmlFor="projectName">Project Name:</label>
      <input
        type="text"
        id="projectName"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <button onClick={handleAddProject}>Add Project</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

AddProjectPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAddProject: PropTypes.func.isRequired,
};

export default AddProjectPopup;
