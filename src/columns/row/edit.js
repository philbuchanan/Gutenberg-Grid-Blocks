/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import {
	BlockControls,
	InnerBlocks,
	__experimentalBlockVariationPicker,
} from '@wordpress/block-editor';
import { columns } from '@wordpress/icons';
import {
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import variations from './variations';
import NumberControl from '../../components/number-control';
import GridAlignmentToolbar from '../../components/alignment-toolbar';
import classnames from '../../utils/classnames';

const RowEdit = ({
	className,
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		alignVertically,
		alignHorizontally,
	} = attributes;

	const childBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
	});

	let columnClasses = [];

	if (childBlocks && childBlocks.length) {
		childBlocks.map((item, index) => {
			const base = `column-${ (index + 1) }-`;

			const sizes = [
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
			];

			sizes.forEach((size, index) => {
				let breakpoint = size === 'xs' ? '' : size;

				if (item.attributes[size]) {
					columnClasses.push(`${ base }span-${ item.attributes[size] }-${ breakpoint }`);
				}

				const offsetSize = `offset${ size }`;

				if (item.attributes[offsetSize]) {
					columnClasses.push(`${ base }offset-${ item.attributes[offsetSize] }-${ breakpoint }`);
				}
			});
		});
	}

	const { replaceInnerBlocks } = useDispatch('core/block-editor');

	return (
		<Fragment>
			<BlockControls>
				<GridAlignmentToolbar
					type="horizontal"
					selected={ alignHorizontally }
					onChange={ (alignHorizontally) => setAttributes({alignHorizontally}) }
					isCollapsed={ true }
				/>
				<GridAlignmentToolbar
					type="vertical"
					selected={ alignVertically }
					onChange={ (alignVertically) => setAttributes({alignVertically}) }
					isCollapsed={ true }
				/>
			</BlockControls>
			{ !!childBlocks && childBlocks.length > 0 && (
				<div className={ classnames('o-row', className, columnClasses, {
					'u-justify-content-center': alignHorizontally === 'centerHorizontal',
					'u-justify-content-space-between': alignHorizontally === 'spaceBetween',
					'u-justify-content-space-around': alignHorizontally === 'spaceAround',
					'u-justify-content-end': alignHorizontally === 'right',
					'u-align-items-center': alignVertically === 'centerVertical',
					'u-align-items-end': alignVertically === 'bottom',
				}) }>
					<InnerBlocks
						allowedBlocks={ ['pb/column'] }
					/>
				</div>
			) }
			{ !childBlocks || childBlocks.length === 0 && (
				<__experimentalBlockVariationPicker
					icon={ columns }
					label={ __('Columns', 'pb') }
					variations={ variations }
					onSelect={ (nextVariation = defaultVariation) => {
						if (nextVariation.attributes) {
							setAttributes(nextVariation.attributes);
						}
						if (nextVariation.innerBlocks) {
							replaceInnerBlocks(
								clientId,
								createBlocksFromInnerBlocksTemplate(
									nextVariation.innerBlocks
								),
								true
							);
						}
					} }
				/>
			) }
		</Fragment>
	);
};

export default RowEdit;
