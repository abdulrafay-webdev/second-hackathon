import React from 'react'

function Button({ children }: any) {
    return (
        <div className='w-fit bg-blue-600 px-3 py-2 flex justify-center items-center text-center sm:text-base text-sm text-white rounded font-semibold'>
            {children}
        </div>
    )
}

export default Button