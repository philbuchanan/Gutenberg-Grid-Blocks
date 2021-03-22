/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import icon from './icon.js';

export default {
	apiVersion: 2,

	title: __('Block Grid', 'pb'),

	description: __('Place a number of items in a tidy grid of equal sized columns.', 'pb'),

	icon: icon,

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
