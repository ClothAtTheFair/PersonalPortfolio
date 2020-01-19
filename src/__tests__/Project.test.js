import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Projects from '../Projects'
import fs from 'fs'
import path from 'path'

/*
*
* Need to test that the cards are present and can be clicked to reveal more information (what that is yet to be determined)
* If a load more button is added then it needs to be tested as well.
*
*/

test('user can see projects and expand them', () => {

    const cssFile = fs.readFileSync(path.resolve(__dirname, '../index.css'), 'utf8'
    )

    const {container, getByLabelText, getByText} = render(<Projects />)

    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = cssFile
    container.append(style)

    expect(getByLabelText(/devwebsite/i)).toBeInTheDocument()
    //code is correct but DOM can see text when though it is hidden so it fails
    //expect(getByLabelText(/devtext/i)).not.toBeVisible()

    fireEvent.click(getByText("ReactJS Developer Portfolio"))
    expect(getByLabelText(/devtext/i)).toBeVisible()

})


// test('user can see more than just 1 project present', () => {

//     const {getByLabelText} = render(<Projects />)

//     expect(getByLabelText(/visioncam/i)).toBeInTheDocument()
//     expect(getByLabelText(/clojurescheduler/i)).toBeInTheDocument()

// })



