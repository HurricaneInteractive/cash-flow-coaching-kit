import React, { ReactElement, useState, MouseEvent } from "react"
import { Fab, Drawer, Button, Box, Typography } from "@material-ui/core"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
import usePageTipStyles from "./_config/style"
import { IPageTip } from "./_config/shape"
import { AsyncTip } from "./_partials"

/**
 * Renders a page tip tooltip at the bottom left of the page
 *
 * @param {string} {tip} File name (no extension) for the tip component
 * @returns ReactElement
 */
const PageTip = ({ tip }: IPageTip): ReactElement => {
	const style = usePageTipStyles()
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

	/**
	 * Toggles the state of the drawer
	 *
	 * @param {Boolean} open State to change the drawer to
	 * @param {KeyboardEvent|MouseEvent<HTMLButtonElement>} event Event generated by a keypress|click
	 */
	const toggleDrawer = (open: boolean) => (
		event: KeyboardEvent | MouseEvent<HTMLButtonElement>
	): void => {
		if (event instanceof KeyboardEvent) {
			if (
				event.type === "keydown" &&
				(event.key === "Tab" || event.key === "Shift")
			) {
				return
			}
		}

		// Change the state of the drawer
		setDrawerOpen(open)
	}

	return (
		<>
			<div className={style.root}>
				<Fab color="secondary" onClick={toggleDrawer(true)} variant="extended">
					<HelpOutlineIcon className={style.icon} />
					Tips
				</Fab>
			</div>
			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
				classes={{
					paper: style.drawer,
				}}
			>
				<Box className={style.closeBox}>
					<Typography variant="h6">Tips</Typography>
					<Button
						onClick={toggleDrawer(false)}
						startIcon={<HighlightOffIcon />}
					>
						Close
					</Button>
				</Box>

				<AsyncTip tip={tip} />
			</Drawer>
		</>
	)
}

export default PageTip
