/* eslint-disable import/prefer-default-export */
import { format } from "date-fns"
import { GridSize } from "@material-ui/core"
import { SelectFieldOptions } from "../../SelectField/SelectField"
import { CanvasType, CFCTimeFrame } from "../../../data/_config/shape"
import upperFirst from "../../../util/strings/upperCaseFirst"
import { pipe } from "../../../util/reduce/math"
import concatStr from "../../../util/strings/concatStr"

type Opts = SelectFieldOptions

/**
 * Converts an array of strings into a array that can be used as options
 * for the `SelectField` component.
 *
 * Use this method with `reduce`
 *
 * ## Example
 * ```ts
 * const opts = ["a", "b", "c"].reduce(reduceToOptions, [])
 * ```
 *
 * @export
 * @param {Opts} acc
 * @param {string} cur
 * @returns {Opts}
 */
export function reduceToOptions(acc: Opts, cur: string): Opts {
	return acc.concat({ value: cur, label: upperFirst(cur) })
}

/**
 * Creates options for the `CanvasTypeSelect` component
 *
 * @export
 * @returns {Opts}
 */
export function canvasTypeOptions(): Opts {
	const x: CanvasType[] = ["review", "forecast", "plan", "track"]
	return x.reduce(reduceToOptions, [])
}

/**
 * Creates options for the `CanvasTimeFrameSelect` component
 *
 * @export
 * @returns {Opts}
 */
export function canvasTimeFrameOptions(): Opts {
	const x: CFCTimeFrame[] = [
		"weekly",
		"fortnightly",
		"monthly",
		"quaterly",
		"biannually",
		"yearly",
		"other",
	]
	return x.reduce(reduceToOptions, [])
}

/**
 * Generates the automated title for the canvas
 *
 * @export
 * @param {CanvasType} type
 * @param {CFCTimeFrame} timeframe
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {string}
 */
export function generateTitle(
	type: CanvasType,
	timeframe: CFCTimeFrame,
	startDate: Date,
	endDate: Date
): string {
	return pipe(
		concatStr(upperFirst(`${timeframe} `)),
		concatStr(format(startDate, "dd/MM/yyyy")),
		concatStr(" to "),
		concatStr(format(endDate, "dd/MM/yyyy"))
	)(upperFirst(`${type} `))
}

export const DescriptionSize = 5
export const AmountSize = 3
export const ApplyGSTSize = 2
export const ActionsSize = 2

/**
 * Gets the labels and grid sizes for the form header component
 *
 * @export
 * @returns {[string, GridSize][]}
 */
export function getFormHeaders(): [string, GridSize][] {
	return [
		["Description", DescriptionSize],
		["Amount", AmountSize],
		["Apply GST", ApplyGSTSize],
		["Actions", ActionsSize],
	]
}
