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
// API calls with axios that are not a simple GET, require a config object
// that config object needs a url, method, and any auth headers if necessary
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
export const updatePet = () => { console.log('pet update')}
// DELETE -> Set a pet free
export const removePet = (user, id) => {
    return axios({
        url: `${apiUrl}/pets/${id}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}