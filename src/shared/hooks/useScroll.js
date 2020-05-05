import { useState, useEffect } from "react"

const isBrowser = typeof window !== `undefined`

const getScrollPosition = () => {
  return isBrowser
    ? { x: window.pageXOffset, y: window.pageYOffset }
    : { x: 0, y: 0 }
}

const useScroll = () => {
  const [position, setScrollPosition] = useState(getScrollPosition())

  useEffect(() => {
    let requestRunning = null
    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition())
          requestRunning = null
        })
      }
    }

    if (isBrowser) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return position
}

export default useScroll
