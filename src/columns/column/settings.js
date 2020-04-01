/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, Path } from '@wordpress/components';

export default {
	title: __('Column', 'pb'),

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M19.5,4H4.5A1.5,1.5,0,0,0,3,5.5v13A1.5,1.5,0,0,0,4.5,20h15A1.5,1.5,0,0,0,21,18.5V5.5A1.5,1.5,0,0,0,19.5,4ZM8.5,18.5H5a.5.5,0,0,1-.5-.5V6A.5.5,0,0,1,5,5.5H8.5Z" />
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
