import React, { ReactElement, useEffect, useState, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import {
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core"
import ListIcon from "@material-ui/icons/List"
import ReplayIcon from "@material-ui/icons/Replay"
import { PrivatePage, PageContainer } from "../../components/Layouts"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import ExpandableNav from "../../components/ExpandableNav"
import findHCById from "../../data/healthChecks/findHCById"
import { IBaseHealthCheck } from "../../data/healthChecks/HealthCheckDatabase"
import { PrivateRoutes, routeVarReplacement } from "../../util/routes/routes"
import { ClientContext } from "../../state/client"
import QuestionSummaries from "../../components/HealthCheck/Summary"
import { QuestionOptions } from "../../components/HealthCheck/_config/shape"
import { questions } from "../../components/HealthCheck/_config/data"
import {
	SummaryTitle,
	InvalidHC,
} from "../../components/HealthCheck/Summary/_partials"

const QUESTIONS_OFFSET = 4

/**
 * Health check summary page
 *
 * @returns ReactElement
 */
const HCSummary = (): ReactElement => {
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const { id } = useParams()
	const [healthCheck, setHealthCheck] = useState<IBaseHealthCheck | undefined>()
	const [fourQuestions, setFourQuestions] = useState<
		QuestionOptions[] | undefined
	>(undefined)
	const [tileAnswers, setTileAnswers] = useState<QuestionOptions[] | undefined>(
		undefined
	)

	useEffect(() => {
		if (id && currentClient) {
			;(async function getHC(): Promise<void> {
				if (typeof currentClient.id !== "undefined") {
					// Fetches the health checks for the client and sets state values
					const hc: IBaseHealthCheck = await findHCById(
						parseInt(id, 10),
						currentClient.id
					)
					setHealthCheck(hc)
					setFourQuestions(hc.answers.slice(0, QUESTIONS_OFFSET))
					setTileAnswers(hc.answers.slice(QUESTIONS_OFFSET))
				}
			})()
		}
	}, [id, currentClient])

	return (
		<PrivatePage>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={9}>
						{healthCheck && tileAnswers ? (
							<>
								<SummaryTitle createdAt={healthCheck.createdAt} />
								<QuestionSummaries
									questions={questions.slice(QUESTIONS_OFFSET)}
									tileAnswers={tileAnswers}
								/>
							</>
						) : (
							<InvalidHC />
						)}
					</Grid>
					<Grid item xs={3}>
						<FourQuestions answers={fourQuestions || []} />
						<ExpandableNav>
							<List component="nav" disablePadding>
								<ListItem
									button
									component={Link}
									to={PrivateRoutes.HealthCheckList}
								>
									<ListItemIcon>
										<ListIcon />
									</ListItemIcon>
									<ListItemText>List of Health Checks</ListItemText>
								</ListItem>
								<ListItem
									button
									component={Link}
									to={routeVarReplacement(PrivateRoutes.HealthCheckQuiz, [
										[":id?", `${healthCheck?.id || ""}`],
									])}
								>
									<ListItemIcon>
										<ReplayIcon />
									</ListItemIcon>
									<ListItemText>Re-take Health Check</ListItemText>
								</ListItem>
							</List>
						</ExpandableNav>
					</Grid>
				</Grid>
			</PageContainer>
		</PrivatePage>
	)
}

export default HCSummary