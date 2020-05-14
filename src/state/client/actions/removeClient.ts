import { IClientState } from "../client-outline"
import { ClientId } from "../../../data/_config/shape"
import filterById from "../../../util/filters/ById"

const removeClient = (state: IClientState, payload: ClientId): IClientState => {
	const clients = state.state.clients.filter(filterById(payload, true))
	const currentClient =
		state.state.currentClient?.id === payload
			? clients[0]
			: state.state.currentClient

	return {
		...state,
		state: {
			...state.state,
			currentClient,
			clients,
		},
	}
}

export default removeClient