import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './TestingReact'

beforeEach(() => {
  render(<App />)
})
afterEach(() => {})
beforeAll(() => {})
afterAll(() => {})

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
    expect(notThere).not.toInTheDocument()
  })
  test('Todos: text renders (capture element using querySelector)', () => {
    const h2 = document.querySelector('h2') // kinda like a backdoor
    expect(h2).toBeInTheDocument()
  })
  test('Todos: text renders (capture element using data attribute)', () => {
    screen.getByTestId()
  })
  test('Submit button is disabled while input empty', () => {

  })
  test('Typing a character enables the input', () => {

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
