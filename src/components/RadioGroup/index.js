import React from 'react';
import useSelector from 'hooks/useSelector';
const RadioGroup = (props) => {
    const { name, options, onChange } = props;
    const selectedOption = useSelector((state) => state.eventType);
    return (React.createElement("div", { className: 'flex flex-col' }, options.map(({ label, value }) => {
        const isSelected = selectedOption === value;
        return (React.createElement("label", { key: value, className: `flex items-center p-2 cursor-pointer ${isSelected
                ? 'text-green-700'
                : 'text-gray-700'}` },
            React.createElement("input", { type: 'radio', name: name, value: value, checked: isSelected, onChange: (e) => onChange(e.target.value), className: 'form-radio text-green-600 focus:ring-0 cursor-pointer' }),
            React.createElement("span", { className: 'ml-2' }, label)));
    })));
};
export default RadioGroup;
