/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';

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
