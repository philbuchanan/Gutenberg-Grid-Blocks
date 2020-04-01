/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, Path } from '@wordpress/components';

export default {
	title: __('Block Grid', 'pb'),

	description: __('Place a number of items in a tidy grid of equal sized columns.', 'pb'),

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M19.5,3H4.5A1.5,1.5,0,0,0,3,4.5v15A1.5,1.5,0,0,0,4.5,21h15A1.5,1.5,0,0,0,21,19.5V4.5A1.5,1.5,0,0,0,19.5,3ZM11.25,19.5H5a.5.5,0,0,1-.5-.5V12.75h6.75Zm0-8.25H4.5V5A.5.5,0,0,1,5,4.5h6.25ZM19.5,19a.5.5,0,0,1-.5.5H12.75V12.75H19.5Zm0-7.75H12.75V4.5H19a.5.5,0,0,1,.5.5Z" />
	</SVG>,

	category: 'layout',

	keywords: [
		__('blockgrid', 'pb'),
		__('grid', 'pb'),
		__('columns', 'pb'),
	],

	supports: {
		className: false,
	},

	attributes: {
		alignVertically: {
			type: 'string',
			default: 'top',
		},
		alignHorizontally: {
			type: 'string',
			default: 'left',
		},
		xs: {
			type: 'number',
		},
		sm: {
			type: 'number',
		},
		md: {
			type: 'number',
		},
		lg: {
			type: 'number',
		},
		xl: {
			type: 'number',
		},
	},
};
