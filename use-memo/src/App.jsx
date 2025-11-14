import React from 'react'
import WithOutUseMemo from './WithOutUseMemo'
import WithUseMemo from './WithUseMemo'
import Parent from './Parent'

export default function App() {
  return (
    <div>
      {/* <WithOutUseMemo /> */}
      {/* <WithUseMemo /> */}
      <Parent />
    </div>
  )
}
