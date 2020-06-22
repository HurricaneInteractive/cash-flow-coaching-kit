import React, { useContext, ReactElement, useEffect, useState } from "react"
import { Box, Card, Divider, CardContent } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import { useMachine } from "@xstate/react"
import { ClientContext } from "../../state/client"
import { NewClientDialog } from "../../content/dialog"
import { useCLStyles } from "./_config/styles"
import { NoClients, ClientList, ImportClient } from "./_partials"
import { IClientState } from "../../state/client/client-outline"
import ClientListingMachine from "./_config/machine"
import Loading from "../Loading"
import SectionTitle from "../SectionTitle"
import SnackbarMsg, { SnackbarMsgData } from "../SnackbarMsg/SnackbarMsg"

/**
 * Component to render the whole Client Listing component
 * with section title, controls and the Client List
 *
 * @returns ReactElement
 */
const ClientListing = (): ReactElement => {
	const clientStore: IClientState = useContext(ClientContext)
	const {
		state: { clientSynced, clients },
	} = clientStore
	const [state, send] = useMachine(ClientListingMachine)
	const styles = useCLStyles()

	// #region Snackbar Functionality
	const [snackbar, setSnackbar] = useState<SnackbarMsgData>({
		open: false,
		msg: "",
	})

	function showSnackbar(
		msg: SnackbarMsgData["msg"],
		severity: SnackbarMsgData["severity"]
	): void {
		setSnackbar({ ...snackbar, msg, severity, open: true })
	}

	function handleClose(event?: React.SyntheticEvent, reason?: string): void {
		if (reason === "clickaway") {
			return
		}

		setSnackbar({ ...snackbar, open: false })
	}
	// #endregion

	// Change the state of the component once clients are synced
	useEffect(() => {
		if (clientSynced) {
			if (clients.length > 0) {
				send("HAS_DATA")
			} else {
				send("IS_EMPTY")
			}
		}
	}, [clientSynced, clients, send])

	/**
	 * Renders components based on the component state
	 *
	 * @returns ReactElement
	 */
	const renderWithMachine = (): ReactElement => {
		switch (state.value) {
			case "data":
				return <ClientList store={clientStore} showSnackbar={showSnackbar} />
			case "empty":
				return <NoClients />
			case "loading":
			default:
				return <Loading />
		}
	}

	return (
		<>
			<Box>
				<SectionTitle>Client List</SectionTitle>
				<Card>
					{renderWithMachine()}
					<Divider />
					<CardContent className={styles.actions}>
						<ImportClient />
						<NewClientDialog
							triggerText="Add new client"
							startIcon={<AddIcon />}
							className={styles.button}
							size="medium"
						/>
					</CardContent>
				</Card>
			</Box>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<SnackbarMsg {...snackbar} onClose={handleClose} />
		</>
	)
}

export default ClientListing
