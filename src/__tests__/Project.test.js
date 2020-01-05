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

test('shows project cards and can be clicked', () =>{
    
    const {queryByText, getByLabelText, getByText} = render (<Projects />)

    // look for development website by label of card
    expect(getByLabelText(/devwebsitecard/i)).toBeInTheDocument()
    
})

