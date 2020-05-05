import { PossibleActionItems } from "../../../../state/action-checklist/shape"

// eslint-disable-next-line import/prefer-default-export
export const actionTitleMapping: Record<PossibleActionItems, string> = {
	cashInActions: "Cash IN actions",
	cashOutActions: "Cash OUT actions",
	planningBusiness: "Planning your business actions",
	recordKeeping: "Record keeping actions",
	funding: "Funding your business actions",
	managing: "Managing your cash flow actions",
	planningCommitments: "Planning your regular financial commitments actions",
	tracking: "Tracking your performance actions",
	transition: "Selling, closing and succession planning",
}
