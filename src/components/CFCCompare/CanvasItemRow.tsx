import React, { ReactElement } from "react"
import { TableCell, TableRow } from "@material-ui/core"
import { CanvasItemRowProps } from "./__config/shape"
import { calculateDifferencePer } from "./__config/utilities"
import { addDollarSign, formatNumber } from "../../util/money/formatting"
import useStyles from "./__config/styles"
import { numOrZero } from "../../util/reduce/math"

/**
 * Used to display the data related to a value for a field in the canvas
 *
 * @export
 * @param {CanvasItemRowProps} {
 * 	values: [val1, val2],
 * 	label,
 * 	bold
 * 	border
 * }
 * @returns {ReactElement}
 */
export default function CanvasItemRow({
	values: [val1, val2],
	label,
	bold = false,
	border = true,
}: CanvasItemRowProps): ReactElement {
	const cls = useStyles()

	return (
		<TableRow className={cls.tableRow}>
			<TableCell
				className={border ? "" : cls.noBorderBottom}
				variant={bold ? "head" : "body"}
			>
				{label || ""}
			</TableCell>
			<TableCell
				className={border ? "" : cls.noBorderBottom}
				variant={bold ? "head" : "body"}
			>
				{formatNumber(`${val1}`)}
			</TableCell>
			<TableCell
				className={border ? "" : cls.noBorderBottom}
				variant={bold ? "head" : "body"}
			>
				{formatNumber(`${val2}`)}
			</TableCell>
			<TableCell
				className={border ? "" : cls.noBorderBottom}
				variant={bold ? "head" : "body"}
			>
				{addDollarSign(formatNumber(`${numOrZero(val1) - numOrZero(val2)}`))}
			</TableCell>
			<TableCell
				className={border ? "" : cls.noBorderBottom}
				variant={bold ? "head" : "body"}
			>
				{calculateDifferencePer(numOrZero(val1), numOrZero(val2))}
			</TableCell>
		</TableRow>
	)
}
