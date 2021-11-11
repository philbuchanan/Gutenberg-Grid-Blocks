/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { column } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import edit from './edit';
import classnames from '../../utils/classnames';

registerBlockType('pb/column', {
	icon: column,

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
			hidexs,
			hidesm,
			hidemd,
			hidelg,
			hidexl,
		} = attributes;

		const blockProps = useBlockProps.save({
			className: classnames('o-col', [
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
				hidexs ? `u-hidden-xs` : '',
				hidesm ? `u-hidden-sm` : '',
				hidemd ? `u-hidden-md` : '',
				hidelg ? `u-hidden-lg` : '',
				hidexl ? `u-hidden-xl` : '',
			]),
		});

		const innerBlocksProps = useInnerBlocksProps.save(blockProps);

		return <div { ...innerBlocksProps } />;
	},
});
