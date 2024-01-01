// sFrame.jsx
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Calendar2 } from '../../icons/Calendar2';
import { ChevronDown1 } from '../../icons/ChevronDown1';
import { X2 } from '../../icons/X2';
import { Button } from '../Button';
import { FormField } from '../FormField';
import { TextField } from '../TextField';

export const sFrame = ({ cardState }) => {
    const [state, dispatch] = useReducer(reducer, {
        cardState: cardState || 'unfilled',
    });

    return ( <
        div className = "inline-flex flex-col items-start overflow-hidden rounded-[10px] relative" > { /* Rest of the sFrame component code */ } <
        /div>
    );
};

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

sFrame.propTypes = {
    cardState: PropTypes.oneOf(['unfilled', 'card-state3', 'filled', 'card-state4']),
};