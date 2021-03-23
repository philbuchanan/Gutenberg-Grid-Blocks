/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, Path } from '@wordpress/components';

export default {
	apiVersion: 2,

	title: __('Block Grid Item', 'pb'),

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M19.5,3H4.5A1.5,1.5,0,0,0,3,4.5v15A1.5,1.5,0,0,0,4.5,21h15A1.5,1.5,0,0,0,21,19.5V4.5A1.5,1.5,0,0,0,19.5,3Zm-8.25,8.25H4.5V5A.5.5,0,0,1,5,4.5h6.25Z" />
	</SVG>,

	parent: ['pb/block-grid'],

	category: 'layout',

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
