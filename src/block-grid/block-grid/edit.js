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
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	BaseControl,
	Button,
	Toolbar,
} = wp.components;



/**
 * Internal dependncies
 */
import NumberControl from '../../number-control';

import getBlockGridClasses from './classes';

import {
	alignmentControls,
	getAlignmentClasses,
} from '../../alignments';

import {
	xsScreen,
	smScreen,
	mdScreen,
	lgScreen,
	xlScreen,
} from '../../icons';

const getBlockGridTemplate = (gridItems) => {
	var template = [];

	for (var i = 0; i < gridItems; i++) {
		template.push(['pb/block-grid-item']);
	}

	return template;
};



function GridBlockEdit({
	clientId,
	className,
	attributes,
	setAttributes,
	hasChildBlocks,
}) {
	function verticalControl(value) {
		var activeAlignment = alignmentControls[value];

		return {
			icon: activeAlignment.icon,
			title: activeAlignment.title,
			isActive: attributes.alignVertically === value,
			onClick: () => setAttributes({
				'alignVertically': value,
			}),
		};
	}

	function horizontalControl(value) {
		var alignment = alignmentControls[value];

		return {
			icon: alignment.icon,
			title: alignment.title,
			isActive: attributes.alignHorizontally === value,
			onClick: () => setAttributes({
				'alignHorizontally': value,
			}),
		};
	}

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __('Number of Block Grid Items', 'pb') }>
					<NumberControl
						label={ __('How many block items do you want?', 'pb') }
						help={ __('Be careful: If you reduce the number of block items, you will loose your existing content in the items removed.', 'pb') }
						value={ attributes.gridItems }
						onChange={
							(count) => {
								setAttributes({
									gridItems: count,
								});
							}
						}
						min={ 2 }
						max={ 30 }
					/>
				</PanelBody>
				<PanelBody title={ __('Block Grid Items / Line', 'pb') }>
					<p>{ __('How many items should display in a single row at each screen size?', 'pb') }</p>
					<NumberControl
						label={ __('Extra Small Screens', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									xs: count,
								});
							}
						}
						value={ attributes.xs }
						max={ 6 }
						allowReset={ true }
						icon={ xsScreen }
					/>
					<NumberControl
						label={ __('Small Screens', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									sm: count,
								});
							}
						}
						value={ attributes.sm }
						max={ 6 }
						allowReset={ true }
						icon={ smScreen }
					/>
					<NumberControl
						label={ __('Medium Screens', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									md: count,
								});
							}
						}
						value={ attributes.md }
						max={ 6 }
						allowReset={ true }
						icon={ mdScreen }
					/>
					<NumberControl
						label={ __('Large Screens', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									lg: count,
								});
							}
						}
						value={ attributes.lg }
						max={ 6 }
						allowReset={ true }
						icon={ lgScreen }
					/>
					<NumberControl
						label={ __('Extral Large Screens', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									xl: count,
								});
							}
						}
						value={ attributes.xl }
						max={ 6 }
						allowReset={ true }
						icon={ xlScreen }
					/>
				</PanelBody>
				<PanelBody title={ __('Alignment', 'pb') }>
					<BaseControl label={ __('Align Horiztonally', 'pb') }>
						<Toolbar controls={
							[
								'left',
								'centerHorizontal',
								'right',
								'spaceBetween',
								'spaceAround',
							].map(horizontalControl)
						} />
					</BaseControl>
					<BaseControl label={ __('Align Vertically', 'pb') }>
						<Toolbar controls={
							[
								'top',
								'centerVertical',
								'bottom',
							].map(verticalControl)
						} />
					</BaseControl>
				</PanelBody>
			</InspectorControls>
			<div className={ ['o-block-grid o-block-grid-' + attributes.lg, ...getAlignmentClasses(attributes)].join(' ') }>
				<InnerBlocks
					template={ getBlockGridTemplate(attributes.gridItems) }
					templateLock="all"
					allowedBlocks={[
						'pb/block-grid-item'
					]}
				/>
			</div>
		</Fragment>
	);
}

export default compose(
	withSelect( (select, ownProps) => {
		const {
			clientId,
		} = ownProps;

		const {
			getBlockOrder,
		} = select('core/block-editor');

		return {
			hasChildBlocks: getBlockOrder(clientId).length > 0,
		};
	} ),
)(GridBlockEdit);
