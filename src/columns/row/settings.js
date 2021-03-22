/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, Path } from '@wordpress/components';
import { columns } from '@wordpress/icons';

export default {
	apiVersion: 2,

	title: __('Columns', 'pb'),

	description: __('Display content in multiple columns.', 'pb'),

	icon: columns,

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
