import React from 'react';
import RadioGroup from 'components/RadioGroup';
import Tooltip from 'components/Tooltip';
import { setEventType } from 'actions/eventType';
import useDispatch from 'hooks/useDispatch';
import * as options from './options';
const EventTypeSelectGroup = (props) => {
    const { title = options.DEFAULT_TITLE } = props;
    const dispatch = useDispatch();
    const handleChange = (value) => {
        dispatch(setEventType(value));
    };
    return (React.createElement("div", { className: 'p-4' },
        React.createElement("h1", { className: 'text-xl font-bold mb-4' },
            title,
            React.createElement(Tooltip, { message: 'You can check state changes in console' },
                React.createElement("b", { className: 'cursor-pointer hover:opacity-0.5 ml-4' }, "\u2139\uFE0F"))),
        React.createElement(RadioGroup, { name: ' eventTypeGroup', options: options.EVENT_TYPES, onChange: handleChange })));
};
export default EventTypeSelectGroup;
