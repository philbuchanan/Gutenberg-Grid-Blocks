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

registerBlockType('pb/column', {
	...settings,

	edit: edit,

	save: ({ attributes }) => {
		const {
			xs,
			sm,
			md,
			lg,
			xl,
			offsetxs,
			offsetsm,
			offsetmd,
			offsetlg,
			offsetxl,
		} = attributes;

		return (
			<div className={ classnames('o-col', [
				xs ? `u-${ xs }of12` : '',
				sm ? `u-${ sm }of12-sm` : '',
				md ? `u-${ md }of12-md` : '',
				lg ? `u-${ lg }of12-lg` : '',
				xl ? `u-${ xl }of12-xl` : '',
				offsetxs ? `u-offset-${ offsetxs }of12` : '',
				offsetsm ? `u-offset-${ offsetsm }of12-sm` : '',
				offsetmd ? `u-offset-${ offsetmd }of12-md` : '',
				offsetlg ? `u-offset-${ offsetlg }of12-lg` : '',
				offsetxl ? `u-offset-${ offsetxl }of12-xl` : '',
			]) }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
