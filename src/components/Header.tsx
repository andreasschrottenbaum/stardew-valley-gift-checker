import './Header.scss'
import FileSelect from './FileSelect'

//@ts-ignore
function Header({ setPlayer }) {
  return (
    <header className='svgc-header'>
      <img src='/logo.png' width='125' height='57' alt='Stardew Valley Logo' />

      <h1>
        <span className='visually-hidden'>Stardew Valley</span> Gift Checker
      </h1>

      <FileSelect onUpdate={setPlayer} />
    </header>
  )
}

export default Header
