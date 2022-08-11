import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './TestingReact'

let submitButton, todoInput

beforeEach(() => {
  render(<App foo="bar" />)
  submitButton = screen.queryByText('Submit Todo')
  todoInput = screen.queryByPlaceholderText('Type todo')
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
    expect(button).not.toBeEnabled() // sanity, normally AVOID TESTING THINGS more than once
    fireEvent.change(input, { target: { value: 'A' } })
    expect(input).toHaveValue('A') // sanity but should probably be tested elsewhere
    expect(button).toBeEnabled() // THIS IS THE IMPORTANT ASSERTION
  })
  test('Can complete a todo', () => {
    const todo = screen.getByText('Have fun')
    fireEvent.click(todo)
    screen.getByText('Have fun ✔️')
  })
  test('Can submit new todo', () => {
    // the elements of interest are captured in the 'beforeEach' at the top (DRY)
    fireEvent.change(todoInput, { target: { value: 'Learn lots of JavaScript' } })
    fireEvent.click(submitButton)
    screen.getByText('Learn lots of JavaScript')
  })
  test('Submitting clears the input', () => {
    // const todo = screen.getByPlaceholderText('Type todo')
    // const button = screen.getByText('Submit Todo')
    // fireEvent.change(todo, { target: { value: 'Fix vaccuum' } })
    // fireEvent.click(button)
    // // screen.getByText('Fix vaccuum')
    // expect(todo).toHaveValue('') // justin rules!

    const button = screen.getByText('Submit Todo')
    const input = screen.getByPlaceholderText(‘Type todo’)
    fireEvent.change(input, { target: { value: ‘A’ } })
    fireEvent.click(button)
    screen.getByText(‘A’)
    screen.getByPlaceholderText(‘Type todo’)
  })
  test('Can hide completed', () => {

  })
})
