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
	SelectControl,
	RangeControl,
} = wp.components;

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
	title: __('Block Grid'),
	icon: 'grid-view',
	category: 'layout',
	keywords: [
		'blockgrid',
		'grid',
		'columns',
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

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __('Number of Block Grid Items') }>
						<RangeControl
							label={ __('How many block items do you want?') }
							help={ __('Be careful: If you reduce the number of block items, you may loose your existing content.') }
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
					<PanelBody title={ __('Item Alignment') }>
						<SelectControl
							label={ __('Align Items Vertically') }
							value={ alignItemsVertically }
							onChange={
								(value) => {
									setAttributes({
										alignItemsVertically: value,
									});
								}
							}
							options={[
								{
									value: '',
									label: __('Top Align Items (default)'),
								},
								{
									value: 'center',
									label: __('Center Items'),
								},
								{
									value: 'center',
									label: __('Bottom Align Items'),
								},
							]}
						/>
					</PanelBody>
					<PanelBody title={ __('Block Grid Items per Line') }>
						<RangeControl
							label={ __('Extra Small') }
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
							label={ __('Small') }
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
							label={ __('Medium') }
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
							label={ __('Large') }
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
							label={ __('Extra Large') }
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
