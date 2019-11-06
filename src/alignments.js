/**
 * WordPress dependencies
 */
const {__, setLocaleData} = wp.i18n;



/**
 * Internal dependencies
 */
import {
	alignTop,
	alignCenterVertical,
	alignBottom,
	alignLeft,
	alignCenterHorizontal,
	alignRight,
	spaceBetween,
	spaceAround,
} from './icons';



export const alignmentControls = {
	top: {
		icon: alignTop,
		title: __('Top Align (default)', 'pb'),
	},
	centerVertical: {
		icon: alignCenterVertical,
		title: __('Center', 'pb'),
	},
	bottom: {
		icon: alignBottom,
		title: __('Bottom Align', 'pb'),
	},
	left: {
		icon: alignLeft,
		title: __('Left Align (default)', 'pb'),
	},
	centerHorizontal: {
		icon: alignCenterHorizontal,
		title: __('Center', 'pb'),
	},
	right: {
		icon: alignRight,
		title: __('Right Align', 'pb'),
	},
	spaceBetween: {
		icon: spaceBetween,
		title: __('Space Between', 'pb'),
	},
	spaceAround: {
		icon: spaceAround,
		title: __('Space Around', 'pb'),
	},
};

export const getAlignmentClasses = (attributes) => {
	let classes = [];

	if (attributes.alignHorizontally) {
		switch(attributes.alignHorizontally) {
			case 'centerHorizontal':
				classes.push('u-justify-content-center');
				break;
			case 'spaceBetween':
				classes.push('u-justify-content-space-between');
				break;
			case 'spaceAround':
				classes.push('u-justify-content-space-around');
				break;
			case 'right':
				classes.push('u-justify-content-end');
				break;
		}
	}

	if (attributes.alignVertically) {
		switch(attributes.alignVertically) {
			case 'centerVertical':
				classes.push('u-align-items-center');
				break;
			case 'bottom':
				classes.push('u-align-items-end');
				break;
		}
	}

	return classes;
};
