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
import classnames from '../../utils/classnames';

registerBlockType('pb/block-grid-item', {
	...settings,

	edit: edit,

	save: ({ attributes }) => {
		const {
			hidexs,
			hidesm,
			hidemd,
			hidelg,
			hidexl,
		} = attributes;

		return (
			<div className={ classnames('o-block-grid__item', [
				hidexs ? `u-hidden-xs` : '',
				hidesm ? `u-hidden-sm` : '',
				hidemd ? `u-hidden-md` : '',
				hidelg ? `u-hidden-lg` : '',
				hidexl ? `u-hidden-xl` : '',
			]) }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
