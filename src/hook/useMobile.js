import {useEffect, useState, useCallback } from 'react'

const useMobile = () => {
    const [windowDetails , setWindowDetails] = useState({mobile: false, width: 0})

    const handleResize = useCallback(() => {
        setWindowDetails({
            mobile: window.innerWidth <= 767 ? true : false,
            width: window.innerWidth,
        })
        }, [setWindowDetails])

        useEffect(() => {
            handleResize()
            window.addEventListener('resize', handleResize)
          }, [handleResize])

  return windowDetails
}

export default useMobile
