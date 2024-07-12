import { useEffect, useState } from 'react'

const useScroll = () => {
   const [state, setState] = useState({x: 0, y: 0});


   useEffect((() =>{
     const scrollHandle = () =>{
        setState({x: window.scrollX, y: window.scrollY})
     }
     window.addEventListener("scroll", scrollHandle)

     return () => {
        window.removeEventListener("scroll", scrollHandle)
     }

   }),[])

   return state
}

export default useScroll
