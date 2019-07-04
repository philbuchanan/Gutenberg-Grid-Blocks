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
 * Internal dependencies
 */
import settings from './settings';

import edit from './edit';

import getColumnClasses from './classes';



registerBlockType('pb/column', {
	...settings,

	edit: edit,

	save: (props) => {
		return (
			<div className={ getColumnClasses(props.attributes) }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
