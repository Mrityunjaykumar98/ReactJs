import { useEffect, useRef } from "react"

export const usePrev = (value) =>{
    const ref = useRef()

    useEffect(()=>{
        ref.current = value
    },[value])
//useEffect callback DOES NOT run before, but after this function returns.
    return ref.current // return first previous value of ref then useEffect get called and update ref current value
}