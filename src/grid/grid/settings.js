
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	SVG,
	Path,
} = wp.components;



export default {
	title: __('Columns', 'pb'),

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path d="M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z" />
		</SVG>,

	category: 'layout',

	keywords: [
		__('row', 'pb'),
		__('grid', 'pb'),
		__('span', 'pb'),
	],

	supports: {
		className: false,
	},

	attributes: {
		columns: {
			type: 'number',
			default: 2,
		},
		alignVertically: {
			type: 'sting',
			default: 'top',
		},
		alignHorizontally: {
			type: 'string',
			default: 'left',
		},
	},
};
