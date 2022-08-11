import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './TestingReact'

beforeEach(() => {

})

describe('<App />', () => {
  test('renders without errors', () => {

  })
  test('Todos: text renders (capture element using queryByText)', () => {

  })
  test('Todos: text renders (capture element using getByText)', () => {

  })
  test('Todos: text renders (capture element using querySelector)', () => {

  })
  test('Todos: text renders (capture element using data attribute)', () => {

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
    screen.debug()
    // const completed = screen.getByText('Learn React ✔️', { exact: false })
    // fireEvent.click(completed)
    // expect(screen.queryByText('Learn React ✔️')).not.toBeInTheDocument()
  })
})
