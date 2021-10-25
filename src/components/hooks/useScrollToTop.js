import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function useScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0)
  }, [location])
}
