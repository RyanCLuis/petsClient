import PetsIndex from './pets/PetsIndex'

const Home = (props) => {
	const { msgAlert } = props
	// console.log('props in home', props)

	// const [pets, setPets] = useState(null)

	// useEffect is an effect hook, and it requires two args
	// the first is a callback function
	// the second arg is a dependency array
	// the dependency array, tells react when to run the effect hook. If we want this to run only on the first render and anytime the page refreshes, we keep the dependency array empty
	// useEffect is called RIGHT after the FIRST render of the component
	
	return (
		<>
			<h2>Home Page</h2>
			{/* { user != null ? <h5>Welcome {user.email}</h5> : null}
			{pets == null ? <LoadingScreen /> : <p>{pets[0].name}</p>} */}
			<PetsIndex msgAlert={msgAlert} />
		</>
	)
}

export default Home
