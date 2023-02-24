import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './Footer'

test('loads and displays greeting', async () => {

  render(<Footer  />)

 const Title = screen.getByText(/MovieApp/i)
 expect(Title).toBeInTheDocument()
})