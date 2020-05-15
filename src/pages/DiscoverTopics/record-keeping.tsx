import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
	List,
	Card,
	CardHeader,
	CardActions,
	CardMedia,
	Button,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
} from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import SectionTitle from "../../components/SectionTitle"

const DTRecordKeeping = (): ReactElement => {
	const styles = useDTStyles()

	return (
		<>
			<PageContainer>
				<Typography
					variant="h5"
					component="h1"
					align="center"
					className={styles.tagline}
				>
					Record keeping
				</Typography>
				<Typography variant="body1" component="p">
					As well as being a legal requirement, keeping accurate, up-to-date
					business records help you make fast, informed, and reliable business
					decisions. It’s important to find a record keeping system that suits
					your business - keep in mind that many digital platforms can automate
					aspects of your record keeping, saving you time and money in the long
					run.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>Accurate record keeping can help you:</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Help identify issues early.
					</Typography>
					<Typography component="li" className={styles.list}>
						Measure how well your business is performing so you can make
						informed business decisions.
					</Typography>
					<Typography component="li" className={styles.list}>
						Keep track of your cash flow by monitoring the money you pay out,
						and the money that comes in.
					</Typography>
					<Typography component="li" className={styles.list}>
						Reduce the risk of employee theft.
					</Typography>
					<Typography component="li" className={styles.list}>
						Claim as many allowable deductions as possible.
					</Typography>
					<Typography component="li" className={styles.list}>
						Show your financial position to banks and other lenders, or
						prospective buyers of your business.
					</Typography>
					<Typography component="li" className={styles.list}>
						Make best use of time with your advisor for business and financial
						planning rather than sifting through papers.
					</Typography>
				</List>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Eden's Digital Records" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/1caO4xN-ZwA"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Edens-digital-records.docx"
								>
									Download Transcript: Eden's Digital Records
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Lisa's Paper Records" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/q9J_sRCKTn8"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Lisas-Paper-records.docx"
								>
									Download Transcript: Lisa's Paper Records
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<SectionTitle className={styles.SectionTitle}>
					QUICKSNAPS - How do you stay on top of your record keeping?
				</SectionTitle>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h5">Records you can rely on</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									To ensure you can make informed financial decisions, you must
									be able to rely upon your financial records.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Can you make informed decisions from the information you
										have?
									</Typography>
									<Typography component="li" className={styles.list}>
										Is the information accurate and complete?
									</Typography>
									<Typography component="li" className={styles.list}>
										Your cash flow budget is based on your planned Cash In and
										Cash Out and allows you to allocate funds for specific
										purposes that are known in advance.
									</Typography>
								</List>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h5">
							An accounting system to make your business more efficient
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									An accounting system often provides an opportunity to
									streamline reporting and allows you to make faster and better
									decisions.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Do you have an accounting system that suits your needs?
									</Typography>
									<Typography component="li" className={styles.list}>
										Are you using all of the available features of your
										accounting system to help you maintain accurate and complete
										records and make more informed decisions?
									</Typography>
									<Typography component="li" className={styles.list}>
										Could a different system streamline the different tasks and
										functions within your business?
									</Typography>
									<Typography component="li" className={styles.list}>
										Could you automate some of your accounting and reporting?
									</Typography>
								</List>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h5">Help with record keeping</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Some accounting packages, an accountant or a bookkeeper may
									assist with record keeping.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Do you have enough time to keep your books and records up to
										date or do you require the specialist skills of an
										accountant or a bookkeeper?
									</Typography>
									<Typography component="li" className={styles.list}>
										Could you outsource some of the accounting functions to free
										up your time to spend in other areas, such as obtaining or
										engaging in new work?
									</Typography>
								</List>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h5">
							Records to meet financial commitments
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Collecting the right records for your financial commitments
									and obligations is essential to meet your obligations. What
									records you need and the time you need to keep them for is an
									important consideration.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Does your record keeping meet the regulatory requirements?
									</Typography>
									<Typography component="li" className={styles.list}>
										Are your records sufficient to allow the business to meet
										its regulatory obligations in a timely manner?
									</Typography>
								</List>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</>
	)
}

export default DTRecordKeeping
