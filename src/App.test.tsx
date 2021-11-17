import { render, screen } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  render(<App />)
})

test('shows logo somewhere on the page', () => {
  const logoElement = document.querySelector('img[src="/logo.png"]')
  expect(logoElement).toBeInTheDocument()
})
