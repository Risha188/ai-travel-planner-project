import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='header'>
        <img src='/logo.svg'/>
        <div>
          <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Header