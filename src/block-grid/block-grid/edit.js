/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	dispatch,
	withDispatch,
	withSelect
} = wp.data;

const {
	compose
} = wp.compose;

const {
	Fragment,
} = wp.element;

const {
	createBlock
} = wp.blocks;

const {
	BlockControls,
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	BaseControl,
	Button,
} = wp.components;



/**
 * Internal dependncies
 */
import NumberControl from '../../components/number-control';

import GridAlignmentToolbar from '../../components/alignment-toolbar';

import getBlockGridClasses from './classes';

import getAlignmentClasses from '../../alignments';

import {
	xsScreen,
	smScreen,
	mdScreen,
	lgScreen,
	xlScreen,
} from '../../icons';



export default ({
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
			<div className={ ['o-block-grid o-block-grid-' + lg, ...getAlignmentClasses(attributes)].join(' ') }>
				<InnerBlocks
					template={ [
						['pb/block-grid-item'],
						['pb/block-grid-item'],
					] }
					allowedBlocks={ ['pb/block-grid-item'] }
				/>
			</div>
		</Fragment>
	);
}
