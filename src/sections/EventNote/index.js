import React from 'react';
import Tooltip from 'components/Tooltip';
import { setEventNote } from 'actions/eventNote';
import useDispatch from 'hooks/useDispatch';
const DEFAULT_LABEL = 'Event Note';
const DEFAULT_PLACEHOLDER = 'Enter note here...';
const EventNote = (props) => {
    const { label = DEFAULT_LABEL, placeholder = DEFAULT_PLACEHOLDER, } = props;
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(setEventNote(event.target.value));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: 'event-note', className: 'text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white' },
            label,
            React.createElement(Tooltip, { message: 'You can check state changes in console' },
                React.createElement("b", { className: 'cursor-pointer hover:opacity-0.5 ml-4' }, "\u2139\uFE0F"))),
        React.createElement("textarea", { id: 'event-note', rows: 4, className: 'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500', placeholder: placeholder, onChange: handleChange })));
};
export default EventNote;
