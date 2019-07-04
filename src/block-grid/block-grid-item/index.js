/**
 * WordPress dependencies
 */
const {
	registerBlockType,
} = wp.blocks;

const {
	InnerBlocks,
} = wp.blockEditor;



/**
 * Internal dependencies
 */
import settings from './settings';

import edit from './edit';



registerBlockType('pb/block-grid-item', {
	...settings,

	edit: edit,

	save: (props) => {
		return (
			<div className="o-block-grid__item">
				<InnerBlocks.Content />
			</div>
		);
	},
});
