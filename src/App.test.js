import { render, screen } from '@testing-library/react';
import App from './App';


describe("Room homepage App", () => {

  it("content menu links", () => {
    const {getByText} = render(<App/>)
    expect(getByText(/home\b/i)).toBeInTheDocument()  
  })
  it("content info title", () => {
    const {getByText} = render(<App/>)
    expect(getByText(/Discover innovative ways to decorate\b/i)).toBeInTheDocument()
  })
})

