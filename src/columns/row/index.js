/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependncies
 */
import settings from './settings';
import transforms from './transforms';
import edit from './edit';
import classnames from '../../utils/classnames';

registerBlockType('pb/row', {
	...settings,

	transforms,

	edit: edit,

	save: ({ attributes }) => {
		const {
			alignVertically,
			alignHorizontally,
		} = attributes;

		return (
			<div className={ classnames('o-row', {
				'u-justify-content-center': alignHorizontally === 'centerHorizontal',
				'u-justify-content-space-between': alignHorizontally === 'spaceBetween',
				'u-justify-content-space-around': alignHorizontally === 'spaceAround',
				'u-justify-content-end': alignHorizontally === 'right',
				'u-align-items-center': alignVertically === 'centerVertical',
				'u-align-items-end': alignVertically === 'bottom',
			}) }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
