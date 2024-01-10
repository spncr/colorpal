import {useState, useEffect} from 'react'

export default function useStoredState(defaultValue, storageKey) {
  const [value, setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(storageKey)

    return storedValue !== null
      ? JSON.parse(storedValue)
      : defaultValue
  })

  useEffect(
    () => window.localStorage.setItem(storageKey, JSON.stringify(value)),
    [storageKey, value]
  )

  return [value, setValue]
}
