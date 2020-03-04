/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

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
			<div className={ getColumnClasses(props.attributes).join(' ') }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
