import { makeStyles } from "@material-ui/core"

// eslint-disable-next-line import/prefer-default-export
export const useQuestionnaireStyles = makeStyles((theme) => ({
	actions: {
		display: "flex",
		justifyContent: "space-between",
		marginTop: theme.spacing(5),
	},
	subtitle: {
		marginTop: theme.spacing(2),
		lineHeight: 1,
	},
	title: {
		marginBottom: theme.spacing(3),
	},
}))

// Option tile styles
export const useOptionTileStyles = makeStyles(() => ({
	cardContent: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}))