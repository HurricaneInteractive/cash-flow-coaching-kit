/* eslint-disable import/prefer-default-export */
import { makeStyles } from "@material-ui/core"

// Styles for the health check summary
export const useSummaryStyles = makeStyles((theme) => ({
	gridRoot: {
		marginTop: theme.spacing(3),
	},
	gridItem: {
		display: "flex",
	},
	cardRoot: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		"& > a": {
			height: "100%",
		},
	},
	areaRoot: {
		display: "flex",
		flexDirection: "column",
	},
	cardHeader: {
		flexGrow: 2,
		alignItems: "flex-start",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
	},
	cardActions: {
		alignSelf: "flex-end",
	},
}))
