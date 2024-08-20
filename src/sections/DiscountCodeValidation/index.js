import React from 'react';
import clsx from 'clsx';
const EMPTY_STRING = '';
const MATCH_CODE = 'Your code has been matched';
const NOT_MATCH_CODE = 'This code incorrect';
const DiscountCodeValidation = (props) => {
    const { discountCode } = props;
    const [value, setValue] = React.useState(EMPTY_STRING);
    const handleChange = React.useCallback((event) => {
        setValue(event.target.value);
    }, []);
    const isInit = React.useMemo(() => value === EMPTY_STRING, [value]);
    const colorName = React.useMemo(() => {
        if (isInit)
            return 'black';
        return value === discountCode ? 'green' : 'red';
    }, [discountCode, value]);
    const title = value === discountCode ? 'Well done!' : 'Oh, snapp!';
    const message = value === discountCode ? MATCH_CODE : NOT_MATCH_CODE;
    return (React.createElement("div", { className: 'pb-6 relative' },
        React.createElement("label", { htmlFor: 'discountCode', className: `text-left block mb-2 text-sm font-medium text-${colorName}-700 dark:text-${colorName}-500` }, "Event Discount Code"),
        React.createElement("input", { disabled: !discountCode, value: value, type: 'text', id: 'discountCode', className: clsx([
                `truncate bg-${colorName}-50 border border-${colorName}-500 text-${colorName}-900 placeholder-${colorName}-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-${colorName}-500 block w-full p-2.5 dark:text-${colorName}-500 dark:placeholder-${colorName}-500 dark:border-${colorName}-500`,
                !discountCode ? 'cursor-not-allowed opacity-50' : ''
            ]), placeholder: 'Enter generated code here', onChange: handleChange }),
        !isInit && (React.createElement("p", { className: `absolute bottom-0 right-0 text-sm text-${colorName}-600 dark:text-${colorName}-500` },
            React.createElement("span", { className: "font-medium" }, title),
            ' ' + message))));
};
export default DiscountCodeValidation;
