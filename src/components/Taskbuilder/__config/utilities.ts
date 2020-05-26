/* eslint-disable import/prefer-default-export */
import { ChecklistOptions } from "./shape"
import { PossibleActionItems } from "../../../state/action-checklist/shape"
import { ActionChecklistStruct, ClientId } from "../../../data/_config/shape"
import { newChecklistItem } from "../../../data/ActionChecklist/_config/utilities"

/**
 * Options to fill the checklist options in the TaskBuilder component
 *
 * @export
 * @param {PossibleActionItems} container
 * @returns {string[]}
 */
export function checklistOptions(container: PossibleActionItems): string[] {
	const options: ChecklistOptions = {
		// NOT USED - There are no discover topics pages for these
		cashInActions: [],
		cashOutActions: [],

		// USED
		planningBusiness: [
			"Forecast my demand.",
			"Set the right price for my product or service.",
			"Assess the capital I need to start up or grow.",
			"Build my business plan.",
		],
		recordKeeping: [],
		funding: [],
		managing: [],
		planningCommitments: [],
		tracking: [],
		transition: [],
	}

	return options[container]
}

/**
 * Generates a name field based on a string value
 * Changes the text to lowercase and replaces all
 * non text/number characters to a underscore
 *
 * @export
 * @param {string} str
 * @returns {string}
 */
export function createNameField(str: string): string {
	return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")
}

/**
 * Checks if a generic string matches a "name"
 *
 * @export
 * @param {string} str
 * @param {string} name
 * @returns {boolean}
 */
export function stringNameMatches(str: string, name: string): boolean {
	return createNameField(str) === name
}

/**
 * Checks if a label is in the checklist data
 *
 * @export
 * @param {string} label
 * @param {ActionChecklistStruct[]} checklists
 * @returns {boolean}
 */
export function inChecklists(
	label: string,
	checklists: ActionChecklistStruct[]
): boolean {
	return (
		typeof checklists.find((item) => item.description === label) !== "undefined"
	)
}

/**
 * Checks if the current item is in the checklist
 * data
 *
 * @export
 * @param {string} label
 * @param {ActionChecklistStruct[]} checklists
 * @returns {boolean}
 */
export function determineChecked(
	label: string[],
	checklists: ActionChecklistStruct[]
): boolean[] {
	if (checklists.length === 0) return new Array(label.length).fill(false)

	return label.map((str) => inChecklists(str, checklists))
}

/**
 * Constructs a array of items based on the answers
 * array.
 *
 * @export
 * @param {boolean[]} answers
 * @param {ClientId} client
 * @param {PossibleActionItems} container
 * @returns {ReducerHOF<ActionChecklistStruct[], string>}
 */
export function constructSelectedItems(
	answers: boolean[],
	client: ClientId,
	container: PossibleActionItems
): ReducerHOF<ActionChecklistStruct[], string> {
	return (acc, cur, i): ActionChecklistStruct[] => {
		if (answers[i]) {
			return acc.concat({
				...newChecklistItem(client, container),
				description: cur,
			})
		}

		return acc
	}
}