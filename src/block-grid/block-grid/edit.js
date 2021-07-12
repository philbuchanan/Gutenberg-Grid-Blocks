/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
	__experimentalBlockVariationPicker,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import {
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import variations from './variations';
import icon from './icon.js';
import {
	NumberControl,
	GridAlignmentToolbar,
} from '../../components/';
import classnames from '../../utils/classnames';

import {
	xsScreen,
	smScreen,
	mdScreen,
	lgScreen,
	xlScreen,
} from '../../components/icons';

const BlockGridEdit = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		className,
		alignVertically,
		alignHorizontally,
		xs,
		sm,
		md,
		lg,
		xl,
	} = attributes;

	const blockProps = useBlockProps({
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

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ['pb/block-grid-item'],
		orientation: 'horizontal',
	});

	const hasChildBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocks(clientId).length > 0;
	}, [clientId]);

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
			<InspectorControls>
				<PanelBody title={ __('Block Grid Items Per Line', 'pb') }>
					<p>{ __('How many items should display in a single row at each screen size?', 'pb') }</p>
					<NumberControl
						label={ __('Extra Small Screens', 'pb') }
						onChange={ (xs) => setAttributes({xs}) }
						value={ xs }
						max={ 6 }
						allowReset={ true }
						icon={ xsScreen }
					/>
					<NumberControl
						label={ __('Small Screens', 'pb') }
						onChange={ (sm) => setAttributes({sm}) }
						value={ sm }
						max={ 6 }
						allowReset={ true }
						icon={ smScreen }
					/>
					<NumberControl
						label={ __('Medium Screens', 'pb') }
						onChange={ (md) => setAttributes({md}) }
						value={ md }
						max={ 6 }
						allowReset={ true }
						icon={ mdScreen }
					/>
					<NumberControl
						label={ __('Large Screens', 'pb') }
						onChange={ (lg) => setAttributes({lg}) }
						value={ lg }
						max={ 6 }
						allowReset={ true }
						icon={ lgScreen }
					/>
					<NumberControl
						label={ __('Extral Large Screens', 'pb') }
						onChange={ (xl) => setAttributes({xl}) }
						value={ xl }
						max={ 6 }
						allowReset={ true }
						icon={ xlScreen }
					/>
				</PanelBody>
			</InspectorControls>
			{ !!hasChildBlocks && (
				<div { ...innerBlocksProps } />
			) }
			{ !hasChildBlocks && (
				<__experimentalBlockVariationPicker
					icon={ icon }
					label={ __('Block Grid', 'pb') }
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
}

export default BlockGridEdit;
