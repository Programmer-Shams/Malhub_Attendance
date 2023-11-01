import React from 'react'

const Button = ({content,style}) => {
  return (
    <div>
        <button className={`text-white p-3 bg-[#4154F1] rounded-2xl ${style}`}>{content}</button>
    </div>
  )
}

export default Button