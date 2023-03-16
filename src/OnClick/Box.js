import React from 'react'

function Box(props) {
  const [on, setOn] = React.useState(props.on)
  const styles = {
    backgroundColor: on ? "black" : "red"
  }
  function toggle() {
    (setOn(prev => !prev))
  }
  return (
    <div className='w-20 h-20 border-2 inline-block border-red-600 m-4 rounded-xl cursor-move'
      style={styles}
      onClick={toggle}
    >
    </div>
  )
}
export default Box