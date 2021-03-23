/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import {
	BlockControls,
	InnerBlocks,
	useBlockProps,
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
import { GridAlignmentToolbar } from '../../components/';
import classnames from '../../utils/classnames';

const RowEdit = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		alignVertically,
		alignHorizontally,
	} = attributes;

	const blockProps = useBlockProps({
		className: classnames('o-row', {
			'u-justify-content-center': alignHorizontally === 'centerHorizontal',
			'u-justify-content-space-between': alignHorizontally === 'spaceBetween',
			'u-justify-content-space-around': alignHorizontally === 'spaceAround',
			'u-justify-content-end': alignHorizontally === 'right',
			'u-align-items-center': alignVertically === 'centerVertical',
			'u-align-items-end': alignVertically === 'bottom',
		}),
	});

	const childBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
	});

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
			<div { ...blockProps }>
				{ !!childBlocks && childBlocks.length > 0 && (
					<InnerBlocks
						allowedBlocks={ ['pb/column'] }
						orientation="horizontal"
					/>
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
			</div>
		</Fragment>
	);
};

export default RowEdit;
