import MovieFilter from './Components/MovieFilter';

function App() {
	return (
		<div className='h-screen w-screen bg-gray-300 flex justify-center p-5'>
			<div className='w-3/4 h-fit bg-white p-3'>
				<MovieFilter />
			</div>
		</div>
	);
}

export default App;
