import React from 'react'

function Days() {
    const d = new Date();
    let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let phrase = [`Yay! It's`, `Whoops, It's`, 'Today is', 'Today is', `It's`, `Hey, it's`, `Yay! It's`]
    let day = d.getDay();
  return (
    <h2>{phrase[day]} {days[day]} 🌝 ☕</h2>
  )
}

export default Days