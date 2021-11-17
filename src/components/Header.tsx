import './Header.scss'

import CitizenList from './CitizenList'

function Header() {
  return (
    <header className='svgc-header'>
      <img src='/logo.png' alt='Stardew Valley Logo' />

      <CitizenList style='small' />
    </header>
  )
}

export default Header
