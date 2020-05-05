import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
	makeStyles,
	List,
	Card,
	CardHeader,
	CardActions,
	CardMedia,
	Container,
	Button,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
} from "@material-ui/core"
import SectionTitle from "../../components/SectionTitle"
import { PrivatePage, PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PictureAsPdf from "@material-ui/icons/PictureAsPdf"

const useDTStyles = makeStyles((theme) => ({
	tagline: {
		marginBottom: theme.spacing(4),
	},
	container: {
		paddingTop: theme.spacing(5),
	},
	grid: {
		paddingTop: theme.spacing(5),
	},
	SectionTitle: {
		paddingTop: theme.spacing(5),
	},
	embed: {
		minHeight: "300px",
		border: "none",
	},
	button: {
		margin: theme.spacing(1),
	},
	containerPurple: {
		backgroundColor: "#cfe8fc",
	},
	list: {
		listStyle: "disc",
		paddingLeft: theme.spacing(2),
	},
}))

const DTPlanningBusiness = (): ReactElement => {
	const styles = useDTStyles()
	return (
		<PrivatePage>
			<PageContainer>
				<Typography
					variant="h5"
					component="h1"
					align="center"
					className={styles.tagline}
				>
					Planning your business
				</Typography>
				<Typography variant="body1" component="p">
					Planning your business is crucial to being successful. When you have a
					well researched business plan, you are able to accurately forecast and
					analyse your business. This helps you to be financially prepared for
					circumstances outside of your control, find opportunities to grow your
					business, and ensure you don't run out of money.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>A business plan can help you:</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Attract funding and find opportunities to grow your business.
					</Typography>
					<Typography component="li" className={styles.list}>
						Estimate the time and cost of starting up, or expanding.
					</Typography>
					<Typography component="li" className={styles.list}>
						Have realistic expectations around demand, value and competition.
					</Typography>
					<Typography component="li" className={styles.list}>
						Plan for regular payments such as insurance, superannuation and GST.
					</Typography>
					<Typography component="li" className={styles.list}>
						Set the right price for your product and/or services.
					</Typography>
					<Typography component="li" className={styles.list}>
						Be financially prepared for circumstances outside your control.
					</Typography>
					<Typography component="li" className={styles.list}>
						Ensure you don’t run out of money.
					</Typography>
				</List>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default DTPlanningBusiness
