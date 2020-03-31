/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, Path } from '@wordpress/components';

export default {
	title: __('Block Grid', 'pb'),

	description: __('Place a number of items in a tidy grid of equal sized columns.', 'pb'),

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M4,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3Zm7,8V5H5v6Zm8,0V5H13v6Zm-8,8V13H5v6Zm8,0V13H13v6Z" />
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
			default: '',
		},
		sm: {
			type: 'number',
			default: '',
		},
		md: {
			type: 'number',
			default: '',
		},
		lg: {
			type: 'number',
			default: '',
		},
		xl: {
			type: 'number',
			default: '',
		},
	},
};
