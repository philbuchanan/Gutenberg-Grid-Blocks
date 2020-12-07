/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, Path } from '@wordpress/components';
import { column } from '@wordpress/icons';

export default {
	title: __('Column', 'pb'),

	icon: column,

	category: 'layout',

	parent: ['pb/row'],

	supports: {
		className: false,
		reusable: false,
	},

	attributes: {
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
		offsetxs: {
			type: 'number',
		},
		offsetsm: {
			type: 'number',
		},
		offsetmd: {
			type: 'number',
		},
		offsetlg: {
			type: 'number',
		},
		offsetxl: {
			type: 'number',
		},
		hidexs: {
			type: 'boolean',
			default: false,
		},
		hidesm: {
			type: 'boolean',
			default: false,
		},
		hidemd: {
			type: 'boolean',
			default: false,
		},
		hidelg: {
			type: 'boolean',
			default: false,
		},
		hidexl: {
			type: 'boolean',
			default: false,
		},
	},
};
