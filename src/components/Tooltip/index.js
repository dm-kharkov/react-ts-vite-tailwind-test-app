import React from 'react';
import useHover from 'hooks/useHover';
const DEFAULT_MESSAGE = 'Tooltip Message';
const Tooltip = (props) => {
    const { children, message = DEFAULT_MESSAGE } = props;
    const [hoverable, hovered] = useHover(() => (React.createElement("div", null, children)));
    return (React.createElement("div", { className: 'relative inline-block' },
        hoverable,
        hovered && (React.createElement("div", { className: 'w-[150px] absolute z-10 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm' },
            message,
            React.createElement("div", { className: 'tooltip-arrow' })))));
};
export default Tooltip;
