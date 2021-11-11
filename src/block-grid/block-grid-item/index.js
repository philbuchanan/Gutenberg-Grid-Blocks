/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { SVG, Path } from '@wordpress/components';

/**
 * Internal dependencies
 */
import edit from './edit';
import classnames from '../../utils/classnames';

registerBlockType('pb/block-grid-item', {
	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M19.5,3H4.5A1.5,1.5,0,0,0,3,4.5v15A1.5,1.5,0,0,0,4.5,21h15A1.5,1.5,0,0,0,21,19.5V4.5A1.5,1.5,0,0,0,19.5,3Zm-8.25,8.25H4.5V5A.5.5,0,0,1,5,4.5h6.25Z" />
	</SVG>,

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
			className: classnames(
				'o-block-grid__item',
				[
					xs ? `u-${ xs }of12` : '',
					sm ? `u-${ sm }of12-sm` : '',
					md ? `u-${ md }of12-md` : '',
					lg ? `u-${ lg }of12-lg` : '',
					xl ? `u-${ xl }of12-xl` : '',
				],
				[
					offsetxs ? `u-offset-${ offsetxs }of12` : '',
					offsetsm ? `u-offset-${ offsetsm }of12-sm` : '',
					offsetmd ? `u-offset-${ offsetmd }of12-md` : '',
					offsetlg ? `u-offset-${ offsetlg }of12-lg` : '',
					offsetxl ? `u-offset-${ offsetxl }of12-xl` : '',
				],
				[
					hidexs ? `u-hidden-xs` : '',
					hidesm ? `u-hidden-sm` : '',
					hidemd ? `u-hidden-md` : '',
					hidelg ? `u-hidden-lg` : '',
					hidexl ? `u-hidden-xl` : '',
				]
			),
		});

		const innerBlocksProps = useInnerBlocksProps.save(blockProps);

		return <div { ...innerBlocksProps } />;
	},
});
