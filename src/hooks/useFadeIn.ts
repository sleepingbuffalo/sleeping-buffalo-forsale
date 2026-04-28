import { useEffect, useRef } from 'react'

export function useFadeIn<T extends HTMLElement = HTMLElement>(
  rootMargin = '-80px',
) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin, threshold: 0.05 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return ref
}
