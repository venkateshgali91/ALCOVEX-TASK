// Import statements...
import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Calendar2 } from '../../icons/Calendar2';
import { ChevronDown1 } from '../../icons/ChevronDown1';
import { Button } from '../Button';
import { FormField } from '../FormField';
import { TextField } from '../TextField';

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
      .post('http://localhost:3001/api/tasks', {
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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddNewClick} // Open popup on "Add new" click
      >
        Add new
      </button>

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
            {/* ... Rest of your form content ... */}
            <div className="flex items-center justify-between bg-white relative mt-4">
              <Button
                size="small"
                sizeSmallStateClassName="!flex-[0_0_auto]"
                stateProp="default"
                text="Cancel"
                type="secondary"
                onClick={handleClose}
              />
              <Button
                onSizeSmallStateClick={() => {
                  dispatch('click_120');
                }}
                size="small"
                sizeSmallStateClassName="!flex-[0_0_auto] !w-1/2"  // Set the width for the Add button
                stateProp="default"
                text={cardState.cardState === 'card-state4' ? 'Save' : 'Add'}
                type="primary"
                onClick={handleAddTask} // Add this line to call the function when the button is clicked
              />
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
    }
  }

  switch (action) {
    case 'click':
      return {
        ...state,
        cardState: 'filled',
      };
  }

  return state;
}

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Popup;
