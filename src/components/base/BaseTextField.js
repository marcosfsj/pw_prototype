import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	dense: {
		marginTop: theme.spacing(2)
	}
}));

export default function BaseTextField(props) {
	const classes = useStyles();
	return (
		<TextField
			id="outlined-dense"
			label={props.label}
			className={clsx(classes.textField, classes.dense)}
			margin="dense"
			variant="outlined"
		/>
	);
}
