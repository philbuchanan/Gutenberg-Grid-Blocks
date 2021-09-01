/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { columns } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import transforms from './transforms';
import variations from './variations';
import edit from './edit';
import classnames from '../../utils/classnames';

registerBlockType('pb/row', {
	icon: columns,

	transforms,

	variations,

	edit: edit,

	save: ({ attributes }) => {
		const {
			alignVertically,
			alignHorizontally,
		} = attributes;

		const blockProps = useBlockProps.save({
			className: classnames('o-row', {
				'u-justify-content-center': alignHorizontally === 'centerHorizontal',
				'u-justify-content-space-between': alignHorizontally === 'spaceBetween',
				'u-justify-content-space-around': alignHorizontally === 'spaceAround',
				'u-justify-content-end': alignHorizontally === 'right',
				'u-align-items-center': alignVertically === 'centerVertical',
				'u-align-items-end': alignVertically === 'bottom',
			}),
		});

		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
