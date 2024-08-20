import React from 'react'

import Notification from 'components/Notification'

import DiscountCodeGeneration from 'sections/DiscountCodeGeneration'
import DiscountCodeValidation from 'sections/DiscountCodeValidation'
import EventNote from 'sections/EventNote'
import EventTypeSelectGroup from 'sections/EventTypeSelectGroup'

import {resetNotification} from 'actions/notification'

import useDispatch from 'hooks/useDispatch'
import useSelector from 'hooks/useSelector'

import './styles.scss'

function Application() {
  const dispatch = useDispatch()

  const [discountCode, setDiscountCode] = React.useState('')

  const notification = useSelector((state: any) => state.notification)

  const handleResetNotification = React.useCallback(
    () => dispatch(resetNotification()),
    []
  )


  return (
    <>
      <EventTypeSelectGroup/>

      <div style={{height: 20}}/>

      <DiscountCodeGeneration setDiscountCode={setDiscountCode}/>

      <div style={{height: 50}}/>

      <DiscountCodeValidation discountCode={discountCode}/>

      <div style={{height: 20}}/>

      <EventNote/>

      <Notification
        message={notification.message}
        onClose={handleResetNotification}
        type={notification.type}
      />
    </>
  )
}

export default Application
