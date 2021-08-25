import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  // rgb is an object and needs to converted to a string to be passed to the rgb() method
  const bcg = rgb.join(',')
  console.log(bcg);
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
      return () => clearTimeout(timeout);
    }, 3000);
  }, [alert])

  // const [background, setBackground] = useState
  return <React.Fragment>
    <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(hex);
    }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p>Copied to Clipboard</p>}
    </article>
  </React.Fragment>
}

export default SingleColor
