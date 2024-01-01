// Import statements...
import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Calendar2 } from '../../icons/Calendar2';
import { ChevronDown1 } from '../../icons/ChevronDown1';

function Popup({ onClose }) {
  const [show, setShow] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('');
  const [cardState, dispatch] = useReducer(reducer, {
    cardState: 'unfilled',
  });

  const handleClose = () => {
    setShow(false);
    onClose(); // Notify the parent component about the close event
  };

  const handleAddTask = () => {
    axios
      .post('http://localhost:3001/api/taskess', {
        task_name: taskName,
        start_date: startDate,
        deadline: deadline,
        status: status,
      })
      .then((response) => {
        // Handle the successful response, update the state, or perform any necessary actions
        console.log('Task added successfully:', response.data);
        // You might want to reset the form fields after successful addition
        setTaskName('');
        setStartDate('');
        setDeadline('');
        setStatus('');
        // You can also close the popup if needed
        handleClose();
      })
      .catch((error) => {
        // Handle errors
        console.error('Error adding task:', error);
      });
  };

  const handleAddNewClick = () => {
    setShow(true);
  };

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 max-w-md mx-auto rounded shadow-md">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              {cardState.cardState === 'card-state4' ? 'Edit task' : 'Add new task'}
            </h2>
            {/* Your form content here */}
            <label>
              Name of the Task
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </label>
            {/* Add other form fields as needed */}
            <div className="flex items-center justify-between bg-white relative mt-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddTask}
              >
                {cardState.cardState === 'card-state4' ? 'Save' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function reducer(state, action) {
  if (state.cardState === 'unfilled') {
    switch (action) {
      case 'click_120':
        return {
          cardState: 'card-state3',
        };
      default:
        return state;
    }
  }

  switch (action) {
    case 'click':
      return {
        ...state,
        cardState: 'filled',
      };
    default:
      return state;
  }
}

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Popup;
