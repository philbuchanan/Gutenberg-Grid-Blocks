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
import getBlockGridClasses from './classes';
import getAlignmentClasses from '../../alignments';

import {
	xsScreen,
	smScreen,
	mdScreen,
	lgScreen,
	xlScreen,
} from '../../components/icons';

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

	/**
	 * Since larger screen sizes inherit the number of block grid items per line
	 * from smaller screen sizes (if the large screen size doesn't have a value
	 * specified), we'll loop over each screen size until we find one with a
	 * setting, and use that value to display content in the editor.
	 */
	const perLine = () => {
		let perLine = 1;

		const sizes = [
			'lg',
			'md',
			'sm',
			'xs',
		];

		for (let i = 0; i < sizes.length; i++) {
			if (attributes[sizes[i]]) {
				perLine = attributes[sizes[i]];
				break;
			}
		}

		return perLine;
	}

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
			<div className={ ['o-block-grid o-block-grid-' + perLine(), ...getAlignmentClasses(attributes), className].join(' ') }>
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
