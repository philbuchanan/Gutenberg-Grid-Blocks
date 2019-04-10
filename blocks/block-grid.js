/**
 * WordPress dependencies
 */
const {__, setLocaleData} = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	Fragment,
} = wp.element;

const {
	InspectorControls,
	InnerBlocks,
} = wp.editor;

const {
	PanelBody,
	BaseControl,
	Toolbar,
	RangeControl,
} = wp.components;



/**
 * Internal dependncies
 */
import {
	alignmentControls,
	getAlignmentClasses,
} from './alignments';



const getBlockGridClasses = (attributes) => {
	var classes = [];

	if (attributes.xs) classes.push('o-block-grid-' + attributes.xs);
	if (attributes.sm) classes.push('o-block-grid-' + attributes.sm + '-sm');
	if (attributes.md) classes.push('o-block-grid-' + attributes.md + '-md');
	if (attributes.lg) classes.push('o-block-grid-' + attributes.lg + '-lg');
	if (attributes.xl) classes.push('o-block-grid-' + attributes.xl + '-xl');

	return classes;
};

const getBlockGridTemplate = (gridItems) => {
	var template = [];

	for (var i = 0; i < gridItems; i++) {
		template.push(['pb/block-grid-item']);
	}

	return template;
};

registerBlockType('pb/block-grid', {
	title: __('Block Grid', 'pb'),
	icon: 'grid-view',
	category: 'layout',
	keywords: [
		__('blockgrid', 'pb'),
		__('grid', 'pb'),
		__('columns', 'pb'),
	],
	supports: {
		className: false,
	},
	attributes: {
		gridItems: {
			type: 'number',
			default: 3
		},
		alignVertically: {
			type: 'string',
			default: 'top',
		},
		alignHorizontally: {
			type: 'string',
			default: 'left',
		},
		xs: {
			type: 'number',
			default: '',
		},
		sm: {
			type: 'number',
			default: '',
		},
		md: {
			type: 'number',
			default: '',
		},
		lg: {
			type: 'number',
			default: 3,
		},
		xl: {
			type: 'number',
			default: '',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: {
				gridItems,
				alignVertically,
				alignHorizontally,
				xs,
				sm,
				md,
				lg,
				xl,
			},
			setAttributes,
		} = props;

		function verticalControl(value) {
			var activeAlignment = alignmentControls[value];

			return {
				icon: activeAlignment.icon,
				title: activeAlignment.title,
				isActive: alignVertically === value,
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
				isActive: alignHorizontally === value,
				onClick: () => setAttributes({
					'alignHorizontally': value,
				}),
			};
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __('Number of Block Grid Items', 'pb') }>
						<RangeControl
							label={ __('How many block items do you want?', 'pb') }
							help={ __('Be careful: If you reduce the number of block items, you will loose your existing content in the items removed.', 'pb') }
							value={ gridItems }
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
						<RangeControl
							label={ __('Extra Small', 'pb') }
							value={ xs }
							onChange={
								(spanCount) => {
									setAttributes({
										xs: spanCount,
									});
								}
							}
							min={ 1 }
							max={ 6 }
						/>
						<RangeControl
							label={ __('Small', 'pb') }
							value={ sm }
							onChange={
								(spanCount) => {
									setAttributes({
										sm: spanCount,
									});
								}
							}
							min={ 1 }
							max={ 6 }
						/>
						<RangeControl
							label={ __('Medium', 'pb') }
							value={ md }
							onChange={
								(spanCount) => {
									setAttributes({
										md: spanCount,
									});
								}
							}
							min={ 1 }
							max={ 6 }
						/>
						<RangeControl
							label={ __('Large', 'pb') }
							value={ lg }
							onChange={
								(spanCount) => {
									setAttributes({
										lg: spanCount,
									});
								}
							}
							min={ 1 }
							max={ 6 }
						/>
						<RangeControl
							label={ __('Extra Large', 'pb') }
							value={ xl }
							onChange={
								(spanCount) => {
									setAttributes({
										xl: spanCount,
									});
								}
							}
							min={ 1 }
							max={ 6 }
						/>
					</PanelBody>
					<PanelBody
						title={ __('Alignment', 'pb') }
						initialOpen={ false }
					>
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
				<div className={ 'o-block-grid o-block-grid-' + lg }>
					<InnerBlocks
						template={ getBlockGridTemplate(gridItems) }
						templateLock="all"
						allowedBlocks={[
							'pb/block-grid-item'
						]}
					/>
				</div>
			</Fragment>
		);
	},
	save: (props) => {
		return (
			<div className={ ['o-block-grid', ...getBlockGridClasses(props.attributes), ...getAlignmentClasses(props.attributes)].join(' ') }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
