// ParentComponent.jsx

import React, { useState } from 'react';
import NewProjectPopup from './NewProjectPopup';

const ParentComponent = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleAddProject = async (projectData) => {
    try {
      // Make API request to add the project
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        // Handle success, e.g., update state or fetch projects again
        console.log('Project added successfully');
      } else {
        // Handle error
        console.error('Failed to add project:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding project:', error.message);
    }
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>
      {isPopupOpen && (
        <NewProjectPopup onClose={closePopup} onAddProject={handleAddProject} />
      )}
    </div>
  );
};

export default ParentComponent;
