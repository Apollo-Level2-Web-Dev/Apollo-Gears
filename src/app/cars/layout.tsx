import React from 'react'

const CarLayout = ({children} : {
    children : React.ReactNode
}) => {
  return (
    <div>
        <h1 className='text-orange-700'>Car Sidebar</h1>
        {children}
        </div>
  )
}

export default CarLayout