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
	RangeControl,
	SelectControl,
	SVG,
	Path,
} = wp.components;

const getRowColumns = (attributes) => {
	classes = [
		'o-row'
	];

	if (attributes.centerContentVertically) {
		classes.push('u-align-items-center');
	}

	if (attributes.alignColumnsHorizontally) {
		switch(attributes.alignColumnsHorizontally) {
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
	'pb/column'
];

const getColumnsTemplate = (columns) => {
	var template = [];

	for (var i = 0; i < columns; i++) {
		template.push(['pb/column']);
	}

	return template;
};

registerBlockType('pb/row', {
	title: __('Grid Row'),
	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path d="M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z" />
		</SVG>,
	category: 'layout',
	keywords: [
		'row',
		'grid',
		'columns',
	],
	className: false,
	attributes: {
		columns: {
			type: 'number',
			default: 2,
		},
		centerContentVertically: {
			type: 'boolean',
			default: false,
		},
		alignColumnsHorizontally: {
			type: 'string',
			default: '',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes: {
				columns,
				centerContentVertically,
				alignColumnsHorizontally,
			},
			setAttributes,
		} = props;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __('Row Settings') }>
						<RangeControl
							label={ __('Number of Columns') }
							help={ __('Be careful: If you reduce the number of columns, you may loose your existing content.') }
							value={ columns }
							onChange={
								(nextColumns) => {
									setAttributes({
										columns: nextColumns,
									});
								}
							}
							min={ 1 }
							max={ 6 }
						/>
					</PanelBody>
					<PanelBody title={ __('Content Alignment') }>
						<SelectControl
							label={ __('Align Column Content') }
							value={ centerContentVertically }
							onChange={
								(value) => {
									setAttributes({
										centerContentVertically: value,
									});
								}
							}
							options={[
								{
									value: '',
									label: __('Default'),
								},
								{
									value: 'center',
									label: __('Center Content'),
								},
							]}
						/>
						<SelectControl
							label={ __('Align Columns Horiztonally') }
							value={ alignColumnsHorizontally }
							onChange={
								(value) => {
									setAttributes({
										alignColumnsHorizontally: value,
									});
								}
							}
							options={[
								{
									value: '',
									label: __('Default'),
								},
								{
									value: 'center',
									label: __('Center Columns'),
								},
								{
									value: 'space-between',
									label: __('Space Between Columns'),
								},
								{
									value: 'space-around',
									label: __('Space Around Columns'),
								},
							]}
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ 'o-row o-row--columns-' + columns }>
					<InnerBlocks
						template={ getColumnsTemplate(columns) }
						templateLock="all"
						allowedBlocks={ allowedBlocks }
					/>
				</div>
			</Fragment>
		);
	},
	save: (props) => {
		return (
			<div className={ getRowColumns(props.attributes) }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
