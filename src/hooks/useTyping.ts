import { useEffect, useState } from 'react'

const TYPE_MS = 70
const DELETE_MS = 40
const HOLD_MS = 2200

/**
 * Cycles through `lines` with a type/hold/delete loop.
 * Respects prefers-reduced-motion by showing the first line statically.
 */
export function useTyping(lines: string[]) {
  const [text, setText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(lines[0])
      return
    }

    const current = lines[lineIndex % lines.length]

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), HOLD_MS)
      return () => clearTimeout(hold)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setLineIndex((i) => (i + 1) % lines.length)
      return
    }

    const tick = setTimeout(
      () => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
      deleting ? DELETE_MS : TYPE_MS,
    )
    return () => clearTimeout(tick)
  }, [text, deleting, lineIndex, lines])

  return text
}
