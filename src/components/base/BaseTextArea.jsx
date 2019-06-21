import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	textField: {
		marginLeft: theme.spacing(0),
		marginRight: theme.spacing(0)
	},
	dense: {
		marginTop: theme.spacing(0)
	}
}));

export default function BaseTextArea(props) {
	const classes = useStyles();
	return (
		<TextField
			id="outlined-dense"
			label={props.label}
			className={clsx(classes.textField, classes.dense)}
			margin="dense"
			variant="outlined"
			multiline={true}
			rows={5}
			onChange={props.onChange}
			value={props.value}
		/>
	);
}
