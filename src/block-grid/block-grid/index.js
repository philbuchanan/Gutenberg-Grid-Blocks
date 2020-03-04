/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import settings from './settings';
import transforms from './transforms';
import edit from './edit';
import getBlockGridClasses from './classes';
import getAlignmentClasses from '../../alignments';

registerBlockType('pb/block-grid', {
	...settings,

	transforms,

	edit: edit,

	save: (props) => {
		return (
			<div className={ ['o-block-grid', ...getBlockGridClasses(props.attributes), ...getAlignmentClasses(props.attributes)].join(' ') }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
