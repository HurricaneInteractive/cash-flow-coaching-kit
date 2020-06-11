import React, { ReactElement } from "react"
import {
	Typography,
	Box,
	List,
	Card,
	CardHeader,
	CardMedia,
	CardActions,
	Button,
} from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"
import useStyles from "./styles"
import Spacer from "../../components/Spacer"

export default function CFC(): ReactElement {
	const cls = useStyles()

	return (
		<ExpandableNav title="Cash Flow Coaching Kit" defaultExpanded={false}>
			<Box className={cls.box}>
				<List className={cls.list}>
					<Typography component="li">
						Introduce the Cash Flow Canvas to your client as an opportunity to
						understand how their business is performing. Consider using the Four
						Key Questions as a frame to discuss this.
					</Typography>
					<Typography component="li">
						Explain how each component, like Cash IN and Cash OUT, helps to
						identify the main cash movements in and out of their business. Work
						through regular financial commitments and other important items in
						their cash flow.
					</Typography>
					<Typography component="li">
						Your conversations on the canvas should draw out how their business
						is performing and identify where they want to go.
					</Typography>
					<Typography component="li">
						Consider asking questions such as:
						<List className={cls.list}>
							<Typography component="li">
								What does the Cash Flow Canvas tell you about your business?
							</Typography>
							<Typography component="li">
								What are the items in your Cash IN or your Cash OUT that have
								the most impact on your cash flow?
							</Typography>
							<Typography component="li">
								Have you set aside an amount for your regular financial
								commitments?
							</Typography>
							<Typography component="li">
								Do you think you can take more or less out of your business
								given your current cash flow position?
							</Typography>
							<Typography component="li">
								How do you think you can improve your cash flow position?
							</Typography>
						</List>
					</Typography>
				</List>

				<Spacer space={4} />

				<Card variant="outlined">
					<CardHeader title="Cash Flow Canvas coaching tips" />
					<CardMedia
						className={cls.embed}
						component="iframe"
						title="Cash Flow Canvas coaching tips"
						src="https://www.youtube.com/embed/Q8_r35mb6YU"
					/>
					<CardActions>
						<Button
							color="primary"
							href="/transcripts/Cash Flow Canvas coaching tips.docx"
						>
							Download Transcript
						</Button>
					</CardActions>
				</Card>
			</Box>
		</ExpandableNav>
	)
}
