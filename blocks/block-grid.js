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
	alignTop,
	alignCenterVertical,
	alignBottom,
	alignLeft,
	alignCenterHorizontal,
	alignRight,
	spaceBetween,
	spaceAround,
} from './icons';

const BLOCK_ALIGNMENTS_CONTROLS = {
	top: {
		icon: alignTop,
		title: __('Top Align Content (default)', 'pb'),
		value: '',
	},
	centerVertical: {
		icon: alignCenterVertical,
		title: __('Center Content', 'pb'),
		value: 'center',
	},
	bottom: {
		icon: alignBottom,
		title: __('Bottom Align Content', 'pb'),
		value: 'end',
	},
	left: {
		icon: alignLeft,
		title: __('Left Align Columns (default)', 'pb'),
		value: '',
	},
	centerHorizontal: {
		icon: alignCenterHorizontal,
		title: __('Center Columns', 'pb'),
		value: 'center',
	},
	right: {
		icon: alignRight,
		title: __('Right Align Columns', 'pb'),
		value: 'end',
	},
	spaceBetween: {
		icon: spaceBetween,
		title: __('Space Between Columns', 'pb'),
		value: 'space-between',
	},
	spaceAround: {
		icon: spaceAround,
		title: __('Space Around Columns', 'pb'),
		value: 'space-around',
	},
};

const getBlockGridClasses = (attributes) => {
	var classes = [
		'o-block-grid'
	];

	if (attributes.xs) classes.push('o-block-grid-' + attributes.xs);
	if (attributes.sm) classes.push('o-block-grid-' + attributes.sm + '-sm');
	if (attributes.md) classes.push('o-block-grid-' + attributes.md + '-md');
	if (attributes.lg) classes.push('o-block-grid-' + attributes.lg + '-lg');
	if (attributes.xl) classes.push('o-block-grid-' + attributes.xl + '-xl');

	if (attributes.alignItemsVertically) {
		switch(attributes.alignItemsVertically) {
			case 'center':
				classes.push('u-align-items-center');
				break;
			case 'end':
				classes.push('u-align-items-end');
				break;
		}
	}

	if (attributes.alignItemsHorizontally) {
		switch(attributes.alignItemsHorizontally) {
			case 'center':
				classes.push('u-justify-content-center');
				break;
			case 'space-between':
				classes.push('u-justify-content-space-between');
				break;
			case 'space-around':
				classes.push('u-justify-content-space-around');
				break;
			case 'end':
				classes.push('u-justify-content-end');
				break;
		}
	}

	return classes.join(' ');
};

const allowedBlocks = [
	'pb/block-grid-item'
];

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
		alignItemsVertically: {
			type: 'string',
			default: '',
		},
		alignItemsHorizontally: {
			type: 'string',
			default: '',
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
				alignItemsVertically,
				alignItemsHorizontally,
				xs,
				sm,
				md,
				lg,
				xl,
			},
			setAttributes,
		} = props;

		function verticalControl(value) {
			var activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[value];

			// Set control active state
			var isActive = false;

			if (alignItemsVertically !== undefined) {
				isActive = alignItemsVertically === activeAlignment.value;
			}
			else {
				if (value === 'top') {
					isActive = true;
				}
			}

			return {
				icon: activeAlignment.icon,
				title: activeAlignment.title,
				isActive: isActive,
				onClick: () => setAttributes({
					'alignItemsVertically': activeAlignment.value,
				}),
			};
		}

		function horizontalControl(value) {
			var activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[value];

			// Set control active state
			var isActive = false;

			if (alignItemsHorizontally !== undefined) {
				isActive = alignItemsHorizontally === activeAlignment.value;
			}
			else {
				if (value === 'top') {
					isActive = true;
				}
			}

			return {
				icon: activeAlignment.icon,
				title: activeAlignment.title,
				isActive: isActive,
				onClick: () => setAttributes({
					'alignItemsHorizontally': activeAlignment.value,
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
						title={ __('Item Alignment', 'pb') }
						initialOpen={ false }
					>
						<BaseControl label={ __('Align Items Vertically', 'pb') }>
							<Toolbar controls={
								[
									'top',
									'centerVertical',
									'bottom',
								].map(verticalControl)
							} />
						</BaseControl>
						<BaseControl label={ __('Align Items Horiztonally', 'pb') }>
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
					</PanelBody>
				</InspectorControls>
				<div className={ 'o-block-grid o-block-grid-' + lg }>
					<InnerBlocks
						template={ getBlockGridTemplate(gridItems) }
						templateLock="all"
						allowedBlocks={ allowedBlocks }
					/>
				</div>
			</Fragment>
		);
	},
	save: (props) => {
		return (
			<div className={ getBlockGridClasses(props.attributes) }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
