import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> INDEX
// axios default method is GET
export const getAllPets = () => {
    return axios(`${apiUrl}/pets`)
}

// READ -> SHOW
export const getOnePet = (id) => {
    return axios(`${apiUrl}/pets/${id}`)
}

// CREATE -> Add a new pet
export const createPet = (user, newPet) => {
    return axios({
        url: `${apiUrl}/pets`,
        method: 'POST',
        headers: {
            'Authorization': `Token token=${user.token}`
        },
        data: { pet: newPet }
    })
}

// UPDATE -> Edit a pet
// DELETE -> Set a pet free