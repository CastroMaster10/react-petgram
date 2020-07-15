import React,{useEffect, useState, useRef} from 'react';

export const useNearScreen = () => {
    const element = useRef(null)
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined'
                ? window.IntersectionObserver
                : import('intersection-observer'))

            .then(() => {
                const observer = new window.IntersectionObserver(entries => {
                    const { isIntersecting } = entries[0]
                    if (isIntersecting) {
                        console.log('si')
                        setShow(true)
                    }

                })
                observer.observe(element.current)
            })
            setLoading(false)
    }, [element])

    return[show, element, loading]
}