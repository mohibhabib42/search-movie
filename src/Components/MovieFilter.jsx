import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Genre, movies } from '../Constants';
import {
	Checkbox,
	FormControl,
	InputLabel,
	ListItemText,
	OutlinedInput,
} from '@material-ui/core';
import Rating from '@mui/material/Rating';
import MovieCard from './MovieCard';
const ratings = [
	{
		value: 1,
		label: (
			<Rating
				style={{ color: '#171717' }}
				name='read-only'
				max={10}
				readOnly
				value={1}
			/>
		),
	},
	{
		value: 2,
		label: (
			<Rating
				style={{ color: '#171717' }}
				name='read-only'
				max={10}
				readOnly
				value={2}
			/>
		),
	},
	{
		value: 3,
		label: (
			<Rating
				style={{ color: '#171717' }}
				name='read-only'
				max={10}
				readOnly
				value={3}
			/>
		),
	},
	{
		value: 4,
		label: (
			<Rating
				style={{ color: '#171717' }}
				name='read-only'
				max={10}
				readOnly
				value={4}
			/>
		),
	},
	{
		value: 5,
		label: (
			<Rating
				style={{ color: '#171717' }}
				name='read-only'
				max={10}
				readOnly
				value={5}
			/>
		),
	},
	{
		value: 6,
		label: (
			<Rating
				style={{ color: '#171717' }}
				name='read-only'
				max={10}
				readOnly
				value={6}
			/>
		),
	},
	{
		value: 7,
		label: (
			<Rating
				style={{ color: '#171717' }}
				name='read-only'
				max={10}
				readOnly
				value={7}
			/>
		),
	},
	{
		value: 8,
		label: (
			<Rating
				style={{ color: '#171717' }}
				name='read-only'
				max={10}
				readOnly
				value={8}
			/>
		),
	},
	{
		value: 9,
		label: (
			<Rating
				style={{ color: '#171717' }}
				name='read-only'
				max={10}
				readOnly
				value={9}
			/>
		),
	},
	{
		value: 10,
		label: (
			<Rating
				style={{ color: '#171717' }}
				name='read-only'
				max={10}
				readOnly
				value={10}
			/>
		),
	},
];

function MovieFilter() {
	const [searchValue, setSearchValue] = useState('');
	const [selectedRating, setSelectedRating] = useState([]);
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [open, setOpen] = useState(false);

	const handleFocus = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleRatingChange = (event) => {
		// event.target.value.includes(0) && event.stopPropagation();
		setSelectedRating(event.target.value.includes(0) ? [] : event.target.value);
	};

	const handleGenresChange = (event) => {
		// event.target.value.includes(0) && event.stopPropagation();
		setSelectedGenres(event.target.value.includes(0) ? [] : event.target.value);
	};

	const filteredMovies = movies.filter((movie) => {
		const matchesSearchValue =
			movie.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
		const matchesRating =
			selectedRating.length === 0 ||
			selectedRating.find(
				(rating) => rating <= movie.rating && movie.rating < rating + 1,
			);
		const matchesGenres =
			selectedGenres.length === 0 || selectedGenres.includes(movie.genre);
		return matchesSearchValue && matchesRating && matchesGenres;
	});

	return (
		<div className='flex flex-col lg:flex-row'>
			<div className='w-full lg:w-1/2 lg:pr-2 mb-4 lg:mb-0'>
				<Autocomplete
					freeSolo
					onClose={handleClose}
					onFocus={handleFocus}
					onch
					open={searchValue !== '' ? true : open}
					options={filteredMovies}
					getOptionLabel={(option) => option.name}
					renderOption={(option) => <MovieCard movieDetails={option} />}
					renderInput={(params) => (
						<TextField
							{...params}
							// onClick={() => setOpen(!open)}
							label='Enter movie name'
							variant='outlined'
							onChange={(event) => {
								setSearchValue(event.target.value);
							}}
							InputProps={{
								...params.InputProps,
								endAdornment: null,
								className: '!font-sans !font-medium !text-sm',
							}}
							InputLabelProps={{
								...params.InputProps,
								className: '!font-sans !font-medium !text-sm !text-[#8F92A1]',
							}}
						/>
					)}
				/>
			</div>

			<FormControl
				variant='outlined'
				className='mx-2 lg:w-1/4 lg:pl-2 mb-4 lg:mb-0'
			>
				<InputLabel
					id='ratings-label'
					className='bg-white !font-sans !font-medium !text-sm !text-[#171717]'
				>
					Ratings
				</InputLabel>
				<Select
					multiple
					id='select'
					labelId='ratings-label'
					value={selectedRating}
					onChange={handleRatingChange}
					input={<OutlinedInput />}
					renderValue={(selected) =>
						selected
							?.map(
								(value) =>
									ratings?.find((rating) => rating.value === value)?.value,
							)
							?.join(', ')
					}
					MenuProps={{
						anchorOrigin: {
							vertical: 'bottom',
							horizontal: 'left',
						},
						transformOrigin: {
							vertical: 'top',
							horizontal: 'left',
						},
						getContentAnchorEl: null,
						PaperProps: {
							style: {
								maxHeight: 250,
								width: 500,
							},
						},
					}}
				>
					<MenuItem value={0}>
						<Checkbox
							style={{ color: '#171717' }}
							checked={selectedRating.length === 0}
						/>
						<ListItemText
							className='!font-sans !font-medium !text-sm'
							primary='Any rating'
						/>
					</MenuItem>
					{ratings.map((rating) => (
						<MenuItem key={rating.value} value={rating.value}>
							<Checkbox
								style={{ color: '#171717' }}
								checked={selectedRating.indexOf(rating.value) > -1}
							/>
							<ListItemText primary={rating.label} />
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl
				variant='outlined'
				className='mx-2 lg:w-1/4 lg:pl-2 mb-4 lg:mb-0'
			>
				<InputLabel
					id='genres-label'
					className='bg-white !font-sans !font-medium !text-sm !text-[#171717]'
				>
					Genres
				</InputLabel>
				<Select
					multiple
					labelId='genres-label'
					value={selectedGenres}
					onChange={handleGenresChange}
					input={<OutlinedInput />}
					renderValue={(selected) => selected.join(', ')}
					MenuProps={{
						anchorOrigin: {
							vertical: 'bottom',
							horizontal: 'left',
						},
						transformOrigin: {
							vertical: 'top',
							horizontal: 'left',
						},
						getContentAnchorEl: null,
						PaperProps: {
							style: {
								maxHeight: 200,
								width: 250,
							},
						},
					}}
				>
					<MenuItem value={0}>
						<Checkbox
							style={{ color: '#171717' }}
							checked={selectedGenres?.length === 0}
						/>
						<ListItemText
							className='!font-sans !font-medium !text-sm'
							primary='Any genre'
						/>
					</MenuItem>
					<MenuItem value={Genre.ACTION}>
						<Checkbox
							style={{ color: '#171717' }}
							checked={selectedGenres.indexOf(Genre.ACTION) > -1}
						/>
						<ListItemText primary={Genre.ACTION} />
					</MenuItem>
					<MenuItem value={Genre.COMEDY}>
						<Checkbox
							style={{ color: '#171717' }}
							checked={selectedGenres.indexOf(Genre.COMEDY) > -1}
						/>
						<ListItemText primary={Genre.COMEDY} />
					</MenuItem>
					<MenuItem value={Genre.DRAMA}>
						<Checkbox
							style={{ color: '#171717' }}
							checked={selectedGenres.indexOf(Genre.DRAMA) > -1}
						/>
						<ListItemText primary={Genre.DRAMA} />
					</MenuItem>
					<MenuItem value={Genre.THRILLER}>
						<Checkbox
							style={{ color: '#171717' }}
							checked={selectedGenres.indexOf(Genre.THRILLER) > -1}
						/>
						<ListItemText primary={Genre.THRILLER} />
					</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

export default MovieFilter;
