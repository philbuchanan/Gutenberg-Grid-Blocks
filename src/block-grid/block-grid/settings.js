/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;



/**
 * Internal dependncies
 */
import getBlockGridClasses from './classes';

import {
	getAlignmentClasses,
} from '../../alignments';



export default {
	title: __('Block Grid', 'pb'),

	icon: 'grid-view',

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
		gridItems: {
			type: 'number',
			default: 3
		},
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
			default: 3,
		},
		xl: {
			type: 'number',
			default: '',
		},
	},
};
