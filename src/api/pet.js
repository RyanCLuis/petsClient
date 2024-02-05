import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> INDEX
// axios default method is GET
export const getAllPets = () => {
    return axios(`${apiUrl}/pets`)
}

// READ -> SHOW
// CREATE -> Add a new pet
// UPDATE -> Edit a pet
// DELETE -> Set a pet free