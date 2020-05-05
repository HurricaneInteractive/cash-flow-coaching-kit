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

const DTPlanningFinanicalCommitments = (): ReactElement => {
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
					Planning your regular financial commitments
				</Typography>
				<Typography variant="body1" component="p">
					There are many operating costs when managing your business. Some are
					more obvious, such as phone bills, rent, or equipment. However, there
					are a number of less obvious costs, including licences you may need to
					operate your business, superannuation for you or your employees, and
					your business activity statements. Knowing and planning for all of
					your commitments can help you to avoid unnecessary cash flow stress.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>
						Planning your regular financial commitments can help you:
					</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Prepare for large payments.
					</Typography>
					<Typography component="li" className={styles.list}>
						Know how much to put aside to meet your commitments when they
						arrive.
					</Typography>
					<Typography component="li" className={styles.list}>
						Look at negotiating where certain payments fall within the year.
					</Typography>
					<Typography component="li" className={styles.list}>
						Be in control of your financial commitments, without any surprises.
					</Typography>
					<Typography component="li" className={styles.list}>
						Feel prepared for the unexpected.
					</Typography>
					<Typography component="li" className={styles.list}>
						Understand the financial ramifications of the decisions you make
						within your business.
					</Typography>
				</List>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default DTPlanningFinanicalCommitments
