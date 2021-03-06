import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Home from '../Home'

//need to test for the social media buttons and that they work.
//not sure how to see if they work as they are redirects

test('user can see header present', () => {

    const {container, getByLabelText, getByText} = render( <Home />)

    expect(container.innerHTML).toMatch("Hello I'm Bradley,");
})

test('user can see social media buttons', () => {

    const {container, getByLabelText, getByText} = render( <Home />)

    expect(getByLabelText(/socialButtons/i)).toBeInTheDocument()

})

//Need a way to test this
test('user can interact with the terminal easter egg', () => {

    const {container, getByLabelText, getByText} = render( <Home />)

    //expect(getByLabelText(/terminal/i)).not.toBeInTheDocument()
    expect(getByLabelText(/terminalbutton/i)).toBeInTheDocument()
    fireEvent.click(getByLabelText(/terminalbutton/i))

   // expect(getByLabelText(/terminal/i)).toBeInTheDocument()
})