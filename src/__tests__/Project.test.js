import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Projects from '../Projects'

/*
*
* Need to test that the cards are present and can be clicked to reveal more information (what that is yet to be determined)
* If a load more button is added then it needs to be tested as well.
*
*/

test('user can see projects and expand them', async () => {

   


    const {getByLabelText, getByText, findByRole} = render(<Projects />)

    expect(getByLabelText(/devwebsite/i)).toBeInTheDocument()
    expect(getByLabelText(/visioncam/i)).toBeInTheDocument()
    expect(getByLabelText(/clojurescheduler/i)).toBeInTheDocument()

    //fill out form
    //fireEvent.change(getByLabelText(/name/i), {target: {value: 'Bradley'}})


})
