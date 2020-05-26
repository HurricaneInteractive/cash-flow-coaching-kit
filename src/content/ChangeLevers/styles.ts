import { makeStyles } from "@material-ui/core"

const useChangeLeversStyles = makeStyles((theme) => ({
	details: {
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2),
	},
	actionGridItem: {
		display: "flex",
		justifyContent: "flex-end",
	},
	contentHeadings: {
		fontWeight: theme.typography.fontWeightMedium,
	},
}))

export default useChangeLeversStyles