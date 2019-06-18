import React from 'react';
import Grid from '@material-ui/core/Grid';
import BaseTextField from './base/BaseTextField';
import SearchButton from '../components/buttons/SearchButton';

export default function SearchFiltersBar() {
	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				Search Filters:
			</Grid>
			<Grid item xs={12}>
				<BaseTextField label="Name" />
			</Grid>
			<Grid item xs={12}>
				<BaseTextField label="e-Mail" />
			</Grid>
			<Grid item xs={12}>
				<SearchButton />
			</Grid>
		</Grid>
	);
}