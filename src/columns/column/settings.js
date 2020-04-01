/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, Path } from '@wordpress/components';

export default {
	title: __('Column', 'pb'),

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M21,4H3A1,1,0,0,0,2,5V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V5A1,1,0,0,0,21,4ZM8,18H4V6H8Z" />
	</SVG>,

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
	},
};
