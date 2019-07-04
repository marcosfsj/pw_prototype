import { createMuiTheme } from "@material-ui/core";
import { red, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: red,
		secondary: {
			main: amber[500]
		}
	}
});

export default theme;