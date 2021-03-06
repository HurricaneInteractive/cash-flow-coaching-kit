import { Machine } from "xstate"

interface Schema {
	states: {
		loading: {}
		success: {}
		failure: {}
	}
}
type Events = { type: "RESOLVE" } | { type: "REJECT" } | { type: "RETRY" }

const fetchMachine = Machine<null, Schema, Events>({
	id: "fetch",
	initial: "loading",
	states: {
		loading: {
			on: {
				RESOLVE: "success",
				REJECT: "failure",
			},
		},
		success: {
			on: {
				REJECT: "failure",
			},
		},
		failure: {
			on: {
				RETRY: {
					target: "loading",
				},
			},
		},
	},
})

export default fetchMachine
