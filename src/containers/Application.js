import React from 'react';
import Notification from 'components/Notification';
import DiscountCodeGeneration from 'sections/DiscountCodeGeneration';
import DiscountCodeValidation from 'sections/DiscountCodeValidation';
import EventNote from 'sections/EventNote';
import EventTypeSelectGroup from 'sections/EventTypeSelectGroup';
import { resetNotification } from 'actions/notification';
import useDispatch from 'hooks/useDispatch';
import useSelector from 'hooks/useSelector';
import './styles.scss';
function Application() {
    const dispatch = useDispatch();
    const [discountCode, setDiscountCode] = React.useState('');
    const notification = useSelector((state) => state.notification);
    const handleResetNotification = React.useCallback(() => dispatch(resetNotification()), []);
    return (React.createElement(React.Fragment, null,
        React.createElement(EventTypeSelectGroup, null),
        React.createElement("div", { style: { height: 20 } }),
        React.createElement(DiscountCodeGeneration, { setDiscountCode: setDiscountCode }),
        React.createElement("div", { style: { height: 50 } }),
        React.createElement(DiscountCodeValidation, { discountCode: discountCode }),
        React.createElement("div", { style: { height: 20 } }),
        React.createElement(EventNote, null),
        React.createElement(Notification, { message: notification.message, onClose: handleResetNotification, type: notification.type })));
}
export default Application;
