import React from 'react'

import { useMyHook } from 'use-screenshot-hook'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
