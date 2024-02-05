// PetCreate is going to render a form
// this form will build a pet object in state
// once the form has been used to build that object, we can submit as part of an API request
// that will be a POST request, and an API call function that we import
// we'll want to send success/failure messages
// on success, we'll want to redirect to the pet show page
// upon failure, component should send a message, clear form, and remain on the same page.
// we'll build a form in another file, that we can use in multiple places
// becuase our pet create and pet update will use the same form input fields

import { useState } from 'react'

const PetCreate = (props) => {
    // pull our our props
    const { user, msgAlert } = props

    // build out state object
    const [pet, setPet] = useState({
        name: '',
        age: '',
        type: '',
        adoptable: false
    })
    
    return (
        <div>
            <h1>Create Pet Component</h1>
        </div>
    )
}

export default PetCreate