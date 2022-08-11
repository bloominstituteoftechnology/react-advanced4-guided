import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './TestingReact'

beforeEach(() => {
  render(<App />)
})
afterEach(() => { })
beforeAll(() => { })
afterAll(() => { })

describe('<App />', () => {
  test('renders without errors', () => {
    // screen.debug()
  })
  test('Todos: text renders (capture element using getByText)', () => {
    const todosHeading = screen.getByText('Todos:') // fails if more than one is found
    expect(todosHeading).toBeInTheDocument()
    expect(todosHeading).toBeVisible()
  })
  test('Todos: text renders (capture element using queryByText)', () => {
    const todosHeading = screen.queryByText('Todos:') // fails if more than one is found
    expect(todosHeading).toBeInTheDocument()
    const notThere = screen.queryByText('Text of an element that is not here')
    expect(notThere).not.toBeInTheDocument()
  })
  test('Todos: text renders (capture element using querySelector)', () => {
    const h2 = document.querySelector('h2') // kinda like a backdoor
    expect(h2).toBeInTheDocument()
  })
  test('Todos: text renders (capture element using data attribute)', () => {
    screen.getByTestId('todoListHeading')
  })
  test('Submit button is disabled while input empty', () => {
    // const buttonIsDisabled = screen.getByText('submit todo', { exact: false })
    // expect(buttonIsDisabled).toBeDisabled()
    const button = screen.getByText(/Submit Todo/i)
    expect(button).toBeDisabled
  })
  test('Typing a character enables the input', () => {
    const input = screen.getByPlaceholderText('Type todo')
    const button = screen.getByText('Submit Todo')
    fireEvent.change(input, { target: { value: 'A' } })
    
  })
  test('Can complete a todo', () => {

  })
  test('Can submit new todo', () => {

  })
  test('Submitting clears the input', () => {

  })
  test('Can hide completed', () => {

  })
})
