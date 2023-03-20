import React from 'react';
import Rating from '@mui/material/Rating';

const MovieCard = ({ movieDetails }) => {
	return (
		<div className='w-full flex justify-between'>
			<div>
				<h4 className='font-sans font-medium text-sm'>{movieDetails.name}</h4>
				<Rating
					style={{ color: '#171717' }}
					name='read-only'
					max={10}
					readOnly
					precision={0.1}
					value={movieDetails.rating}
				/>
			</div>
			<div>
				<p className='font-sans font-medium text-[#777777] text-sm'>
					{movieDetails.genre}
				</p>
			</div>
		</div>
	);
};

export default MovieCard;
