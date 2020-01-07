import {Router} from 'react-router-dom'
import React from 'react'
import {createMemoryHistory} from 'history'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from '../Main'

//test setup abstraction needs to be done here


test('full app rendering/navigating', () => {
    const history = createMemoryHistory()
    const {container, getByText} = render(
        <Router history={history}>
            <Main />
        </Router>
    )

    // verify page content for expected route
    expect(container.innerHTML).toMatch("Hello, I'm Bradley")

    fireEvent.click(getByText(/projects/i))

    //Check that the content changed to the project page title
    expect(container.innerHTML).toMatch("Projects I'm working on")

   
})

test ('make sure better projects is there', () => {
    const {container, getByText} = render(
            <Main />       
    )

    fireEvent.click(getByText(/better/i))

    expect(container.innerHTML).toMatch("Maybe a better way to show projects")

})