/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Toolbar,
} = wp.components;




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
} from '../icons';



const alignmentControls = {
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

export default ({
	className,
	type,
	selected,
	onChange,
	isCollapsed,
	...props
}) => {
	const controls = type === 'vertical' ? [
		'top',
		'centerVertical',
		'bottom',
	] : [
		'left',
		'centerHorizontal',
		'right',
		'spaceBetween',
		'spaceAround',
	];

	return (
		<Toolbar
			icon={ alignmentControls[selected].icon }
			controls={ controls.map((value) => {
				let activeAlignment = alignmentControls[value];

				return {
					icon: activeAlignment.icon,
					title: activeAlignment.title,
					isActive: selected === value,
					onClick: () => {
						onChange(value);
					}
				};
			}) }
			isCollapsed={ isCollapsed }
		/>
	)
};
