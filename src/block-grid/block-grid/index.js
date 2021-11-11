/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import transforms from './transforms';
import variations from './variations';
import edit from './edit';
import icon from './icon';
import classnames from '../../utils/classnames';

registerBlockType('pb/block-grid', {
	icon,

	transforms,

	variations,

	edit: edit,

	save: ({ attributes }) => {
		const {
			alignVertically,
			alignHorizontally,
			xs,
			sm,
			md,
			lg,
			xl,
		} = attributes;

		const blockProps = useBlockProps.save({
			className: classnames('o-block-grid', {
				'u-justify-content-center': alignHorizontally === 'centerHorizontal',
				'u-justify-content-space-between': alignHorizontally === 'spaceBetween',
				'u-justify-content-space-around': alignHorizontally === 'spaceAround',
				'u-justify-content-end': alignHorizontally === 'right',
				'u-align-items-center': alignVertically === 'centerVertical',
				'u-align-items-end': alignVertically === 'bottom',
			}, [
				xs ? `o-block-grid-${ xs }` : '',
				sm ? `o-block-grid-${ sm }-sm` : '',
				md ? `o-block-grid-${ md }-md` : '',
				lg ? `o-block-grid-${ lg }-lg` : '',
				xl ? `o-block-grid-${ xl }-xl` : '',
			]),
		});

		const innerBlocksProps = useInnerBlocksProps.save(blockProps);

		return <div { ...innerBlocksProps } />;
	},
});
