/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	BaseControl,
} from '@wordpress/components';

/**
 * Internal dependncies
 */
import NumberControl from '../../components/number-control';
import GridAlignmentToolbar from '../../components/alignment-toolbar';
import classnames from '../../utils/classnames';

import {
	xsScreen,
	smScreen,
	mdScreen,
	lgScreen,
	xlScreen,
} from '../../components/icons';

const BlockGridEdit = ({
	className,
	attributes,
	setAttributes,
	isSelected,
}) => {
	const {
		alignVertically,
		alignHorizontally,
		xs,
		sm,
		md,
		lg,
		xl,
	} = attributes;

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
				<PanelBody title={ __('Alignment', 'pb') }>
					<BaseControl label={ __('Align Horiztonally', 'pb') }>
						<GridAlignmentToolbar
							type="horizontal"
							selected={ alignHorizontally }
							onChange={ (alignHorizontally) => setAttributes({alignHorizontally}) }
						/>
					</BaseControl>
					<BaseControl label={ __('Align Vertically', 'pb') }>
						<GridAlignmentToolbar
							type="vertical"
							selected={ alignVertically }
							onChange={ (alignVertically) => setAttributes({alignVertically}) }
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
			<div className={ classnames('o-block-grid', className, {
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
			]) }>
				<InnerBlocks
					template={ [
						['pb/block-grid-item'],
						['pb/block-grid-item'],
					] }
					allowedBlocks={ ['pb/block-grid-item'] }
					renderAppender={ !!isSelected ? () => (
						<InnerBlocks.ButtonBlockAppender/>
					) : false }
				/>
			</div>
		</Fragment>
	);
}

export default BlockGridEdit;
