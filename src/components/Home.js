import { useState, useEffect } from 'react'
import { getAllPets } from '../api/pet'
import LoadingScreen from './shared/LoadingScreen'

const Home = (props) => {
	const { msgAlert, user } = props
	// console.log('props in home', props)

	const [pets, setPets] = useState(null)

	// useEffect is an effect hook, and it requires two args
	// the first is a callback function
	// the second arg is a dependency array
	// the dependency array, tells react when to run the effect hook. If we want this to run only on the first render and anytime the page refreshes, we keep the dependency array empty
	// useEffect is called RIGHT after the FIRST render of the component
	useEffect(() => {
		getAllPets()
			// .then(res => console.log('pets from axios call: \n', res.data.pets))
			.then(res => {
				console.log('use Effect hook ran')
				setPets(res.data.pets)
			})
			.catch(error => console.error)
	}, [])

	// WE NEVER EVER DO THIS
	// getAllPets()
	// 	.then(res => setPets(res.data.pets))
	// 	.catch(error => console.error)
	// API calls need to happen inside of the useEffect hook, or as result of a user action, like a button click
	console.log('the pets in home', pets)

	return (
		<>
			<h2>Home Page</h2>
			{ user != null ? <h5>Welcome {user.email}</h5> : null}
			{pets == null ? <LoadingScreen /> : <p>{pets[0].name}</p>}
		</>
	)
}

export default Home
