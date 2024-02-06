// this modal is rendered by the PetShow component
// the state that controls this modal (show) will live in the PetShow component(the parent of this modal)
// the state, as well as the updater function for that state, will be passed to this modal as props
// other props that we will need, are  the user, updatePet, msgAlert, and triggerRefresh

import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import PetForm from '../shared/PetForm'
import messages from '../shared/AutoDismissAlert/messages'

const EditPetModal = (props) => {
    // pull the important things from our props
    const { user, show, handleClose, updatePet, msgAlert, triggerRefresh } = props
    // we're bringing in the pet from props, but only for the initial state
    // by using the original pet as our initial state for a NEW piece of state, specific to this component (called pet), we'll be able to modify the pet we are updating without affecting the original state in the parent component
    const [pet, setPet] = useState(props.pet)

    const onChange = (e) => {
        e.persist()
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <PetForm 
                    pet={pet}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading="Update Pet"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditPetModal