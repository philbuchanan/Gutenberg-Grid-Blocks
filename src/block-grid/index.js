/**
 * WordPress dependencies
 */
const {__, setLocaleData} = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	InnerBlocks,
} = wp.blockEditor;



/**
 * Internal dependncies
 */
import edit from './edit';

import getBlockGridClasses from './classes';

import {
	getAlignmentClasses,
} from '../alignments';



registerBlockType('pb/block-grid', {
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

	edit: edit,

	save: (props) => {
		return (
			<div className={ ['o-block-grid', ...getBlockGridClasses(props.attributes), ...getAlignmentClasses(props.attributes)].join(' ') }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
