import React, {ChangeEvent} from 'react'

import useSelector from 'hooks/useSelector'

interface RadioGroupProps {
  name: string,
  options: {
    label: string,
    value: string
  }[],
  onChange: (value: string) => void
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const {name, options, onChange} = props
  
  const selectedOption = useSelector((state: any) => state.eventType)

  return (
    <div className='flex flex-col'>
      {options.map(({label, value}) => {
        const isSelected = selectedOption === value

        return (
          <label
            key={value}
            className={`flex items-center p-2 cursor-pointer ${
              isSelected
                ? 'text-green-700'
                : 'text-gray-700'
            }`}
          >
            <input
              type='radio'
              name={name}
              value={value}
              checked={isSelected}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
              className='form-radio text-green-600 focus:ring-0 cursor-pointer'
            />

            <span className='ml-2'>
          {label}
        </span>
          </label>
        )
      })}
    </div>
  )
}


export default RadioGroup
