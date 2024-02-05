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
import PetForm from '../shared/PetForm'

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

    const onChange = (e) => {
        // e is the placeholder for the event
        // e.persist() is bc react uses the virtual DOM, we want our form data to persist every time the page re-renders. Which will be a lot of times
        e.persist()

        // if you pass an argument to the callback function of your state hook updater, that argument is a placeholder for the most recent state, this will maintain anythign that is not being updated
        setPet(prevPet => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            // the above two items work great for stings
            // however, we need to handle numbers and booleans differently
            if (e.target.type === 'number') {
                // if the target is a number, parst integer from the value
                updatedValue = parseInt(updatedValue)
            }

            // to handle our checkbox, we need to tekk it when to send true and when to send false. Because the default values for a checkbox are 'checked' or 'unchecked', we need to convert those to the appropriate boolean values
            if (updatedName === 'adoptable' && e.target.checked) {
                updatedValue = true
            } else if (updatedName === 'adoptable' && !e.target.checked) {
                updatedValue = false
            }

            // this will actuallt build our pet object
            // we grab an attribute name, and assign the respective value
            const updatedPet = { [updatedName]: updatedValue }

            // to keep all the old stuff, and add newly typed letters/numbers etc
            return {...prevPet, ...updatedPet}
        })
    }
    console.log('the pet in PetCreate', pet)
    return (
        <PetForm
            pet={pet}
            handleChange={onChange}
            handleSubmit={() => console.log('submit')}
            heading='Create a Pet'
        />
    )
}

export default PetCreate