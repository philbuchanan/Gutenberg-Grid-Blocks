/**
 * WordPress dependencies
 */
const {
	registerBlockType,
} = wp.blocks;

const {
	InnerBlocks,
} = wp.blockEditor;

const {
	SVG,
	Path,
} = wp.components;



/**
 * Internal dependncies
 */
import getAlignmentClasses from '../../alignments';

import settings from './settings';

import transforms from './transforms';

import edit from './edit';



registerBlockType('pb/row', {
	...settings,

	transforms,

	edit: edit,

	save: (props) => {
		return (
			<div className={ ['o-row', ...getAlignmentClasses(props.attributes)].join(' ') }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
