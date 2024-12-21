import React, { useEffect, useState } from 'react'
import '../styles/components/loading.sass'

const Loading = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            }, 6000);
        return () => clearTimeout(timer);
    }, [])

  return (
    <>
    {isLoading ? (
        <div className='loading-screen'>
            <div className="logo">
               <img src='/img/hmg.png' alt=''/>
            </div> 
        </div>
    ) : (
        children
    )}
    </>
  )
}

export default Loading
