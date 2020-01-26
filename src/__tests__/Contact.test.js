import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Contact from '../Contact'

/*
* The Contact page should have a contact for with a title, maybe some text, and 3 inputs: Name, message, and email.
* There should also be a submit button
*
* Needs an integration test between front and backend (which sends it out)
*/

test('user can submit a message', async () => {

    //mock window.fetch for test
    const fakeUserResponse = {token: 'fake_user_token'}
    jest.spyOn(window, 'fetch').mockImplementationOnce(() =>{
        return Promise.resolve({
            json: () => Promise.resolve(fakeUserResponse),
        })
    })

    const {getByLabelText, getByText, findByRole} = render(<Contact />)

    //fill out form
    fireEvent.change(getByLabelText(/name/i), {target: {value: 'Bradley'}})
    fireEvent.change(getByLabelText(/email/i), {target: {value: 'bradleycodes@gmail.com'}})
    fireEvent.change(getByLabelText(/message/i), {target: {value: 'some text here'}})

    expect(getByLabelText(/submit_button/i)).toBeInTheDocument()
    //because there is a quota for EmailJS, this has to be commented out so a test email is not sent everytime
    //fireEvent.click(getByText(/submit/i))

   

})