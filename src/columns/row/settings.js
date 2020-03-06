/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, Path } from '@wordpress/components';

export default {
	title: __('Columns', 'pb'),

	description: __('Display content in multiple columns.', 'pb'),

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M21,4H3A1,1,0,0,0,2,5V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V5A1,1,0,0,0,21,4ZM8,18H4V6H8Zm6,0H10V6h4Zm6,0H16V6h4Z" />
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
