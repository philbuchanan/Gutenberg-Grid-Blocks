/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	SVG,
	Path,
} = wp.components;



export default {
	title: __('Grid Column', 'pb'),

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path fill="none" d="M0 0h24v24H0V0z" />
			<Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" />
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
		offsetxs: {
			type: 'number',
			default: '',
		},
		offsetsm: {
			type: 'number',
			default: '',
		},
		offsetmd: {
			type: 'number',
			default: '',
		},
		offsetlg: {
			type: 'number',
			default: '',
		},
		offsetxl: {
			type: 'number',
			default: '',
		},
	},
};
