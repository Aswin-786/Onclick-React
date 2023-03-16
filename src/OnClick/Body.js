import React from 'react'
import Box from './Box'
import Data from './Data'

function Body() {
  const [content, setContent] = React.useState(Data)
  console.log(content);
  const squares = content.map((obj) => {
    return (
      <Box
        key={obj.id}
        on={obj.on}
      />
    )
  })
  return (
    <div>
      {squares}
    </div>
  )
}

export default Body