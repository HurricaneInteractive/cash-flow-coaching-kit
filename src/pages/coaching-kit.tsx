import React, { ReactElement } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
	Typography,
	Grid,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Divider,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	makeStyles,
	Avatar,
	List,
	ListItem,
	Box,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { PageContainer } from "../components/Layouts"
import { PrivateRoutes, routeVarReplacement } from "../util/routes/routes"
import PageTip from "../components/PageTip"
import Spacer from "../components/Spacer"

const useCKStyles = makeStyles((theme) => ({
	MainHeading: {
		paddingTop: theme.spacing(0),
		marginBottom: theme.spacing(2),
		fontSize: "1.8rem",
	},
	SectionTitle: {
		paddingTop: theme.spacing(1),
		fontSize: "1.8rem",
	},
	purple: {
		color: theme.palette.getContrastText("#9c27b0"),
		backgroundColor: "#9c27b0",
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginTop: theme.spacing(2),
		fontSize: "1.8rem",
	},
	green: {
		color: theme.palette.getContrastText("#43a047"),
		backgroundColor: "#43a047",
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginTop: theme.spacing(2),
		fontSize: "1.8rem",
	},
	blue: {
		color: theme.palette.getContrastText("#0091ea"),
		backgroundColor: "#0091ea",
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginTop: theme.spacing(2),
		fontSize: "1.8rem",
	},
	alignJustifyContent: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "nowrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		margin: theme.spacing(2, 0),
	},
	contentText: {
		margin: theme.spacing(1, 0),
	},
}))

const CoachingKit = (): ReactElement => {
	const styles = useCKStyles()

	return (
		<>
			<PageContainer role="main">
				<Typography
					component="h1"
					className={styles.MainHeading}
					align="center"
				>
					The cash flow coaching kit
				</Typography>

				<Grid container spacing={0}>
					<Grid item sm={2} />
					<Grid item xs={12} sm={8}>
						<Typography className={styles.contentText} align="center">
							The cash flow kit has three phases: discover, plan and action.
							Working through the kit will help you plan, maintain and grow your
							business.
						</Typography>
						<Typography className={styles.contentText} align="center">
							In each phase in the kit, you will focus on 4 key questions. They
							look at profit, provisioning, liquidity and goals. Answering these
							will create a foundation for strong cash flow management.
						</Typography>
					</Grid>
				</Grid>

				<Spacer space={2} />
				<Box>
					<ExpansionPanel>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="four-questions-content"
							id="four-questions-header"
						>
							<Typography variant="h6" component="h2">
								What are the <em> Four Key Questions</em>?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Grid container>
								<Grid item xs={12}>
									{/* <Typography
									variant="body1"
									component="p"
									className={styles.contentText}
								>
									These questions will help you understand your business cash
									flow and identify areas that you can improve.
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
								>
									They are important because they set the foundation for strong
									cash flow management by focusing on four critical factors -
									profit, provisioning, liquidity and meeting goals.
								</Typography> */}
									<List style={{ padding: 0 }}>
										<ListItem className={styles.contentText}>
											1. Am I trading profitably?
										</ListItem>
										<Divider />
										<ListItem className={styles.contentText}>
											2. Have I put enough aside to meet my regular financial
											commitments?
										</ListItem>
										<Divider />
										<ListItem className={styles.contentText}>
											3. Does my business have enough to spend on myself and pay
											others?
										</ListItem>
										<Divider />
										<ListItem className={styles.contentText}>
											4. Is my business improving its financial position?
										</ListItem>
									</List>
								</Grid>
							</Grid>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</Box>
				<Spacer space={2} />
				<Grid container spacing={3}>
					<Grid item sm={4}>
						<Grid container spacing={3} direction="column">
							<Grid item className={styles.alignJustifyContent}>
								<Avatar className={styles.purple}>1</Avatar>
								<Typography
									component="h2"
									variant="h5"
									className={styles.SectionTitle}
								>
									Discover
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									align="center"
								>
									Learn about cash flow management.
								</Typography>
							</Grid>
							<Grid item>
								<Card>
									<CardMedia
										component="img"
										height="155"
										image="/images/healthCheck_thumb.png"
										title="Health check"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Health check
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											Answer 10 questions to learn about the health of your
											business.
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											color="primary"
											component={RouterLink}
											to={routeVarReplacement(PrivateRoutes.HealthCheckQuiz, [
												[":id?", ""],
											])}
										>
											Read More
										</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid item>
								<Card>
									<CardMedia
										component="img"
										alt="Discover topics"
										height="155"
										image="/images/discoverTopics_thumb.png"
										title="Discover topics"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Discover topics
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											Build your business knowledge with activities and ideas
											that you can do at any time.
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											color="primary"
											component={RouterLink}
											to={PrivateRoutes.DiscoverTopics}
										>
											Read More
										</Button>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Grid>
					<Grid item sm={4}>
						<Grid container spacing={3} direction="column">
							<Grid item className={styles.alignJustifyContent}>
								<Avatar className={styles.green}>2</Avatar>
								<Typography
									component="h2"
									variant="h5"
									className={styles.SectionTitle}
								>
									Apply
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									align="center"
								>
									Understand your current cash flow and plan improvements.
								</Typography>
							</Grid>
							<Grid item>
								<Card>
									<CardMedia
										component="img"
										alt="Cash flow canvas"
										height="155"
										image="/images/cashFlowCanvas_thumb.png"
										title="Cash flow canvas"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Cash flow canvas
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											Input simple figures to review, plan, change and track
											your cash flow.
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											color="primary"
											component={RouterLink}
											to={PrivateRoutes.CFC}
										>
											Read More
										</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid item>
								<Card>
									<CardMedia
										component="img"
										alt="Change levers"
										height="155"
										image="/images/changeLevers_thumb.png"
										title="Change levers"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Change levers
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											Explore practical ideas and actions to improve your cash
											flow.
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											color="primary"
											component={RouterLink}
											to={PrivateRoutes.ChangeLevers}
										>
											Read More
										</Button>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Grid>
					<Grid item sm={4}>
						<Grid container spacing={3} direction="column">
							<Grid item className={styles.alignJustifyContent}>
								<Avatar className={styles.blue}>3</Avatar>
								<Typography
									component="h2"
									variant="h5"
									className={styles.SectionTitle}
								>
									Plan &amp; Action
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									align="center"
								>
									Create an action checklist and track your progress.
								</Typography>
							</Grid>
							<Grid item>
								<Card>
									<CardMedia
										component="img"
										alt="Action checklist"
										height="155"
										image="/images/actionChecklist_thumb.png"
										title="Action checklist"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Action checklist
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											Maintain a list of actions and deadlines to help you track
											your cash flow improvements over time.
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											color="primary"
											component={RouterLink}
											to={PrivateRoutes.ActionChecklist}
										>
											Read More
										</Button>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={8}>
						<Spacer space={3} />
						<Typography className={styles.contentText}>
							The Cash Flow Coaching Kit allows business advisors to work with
							their clients to improve cash flow management.
						</Typography>
						<Typography className={styles.contentText}>
							You can use the kit for your own self-directed learning. However,
							we recommended that you use it with a professional advisor. They
							can help with any questions or issues it raises.
						</Typography>
					</Grid>
				</Grid>
				<PageTip tip="CoachingKitTips" />
			</PageContainer>
		</>
	)
}

export default CoachingKit
