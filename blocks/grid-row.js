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
	SVG,
	Path,
} = wp.components;

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
	},
	edit: (props) => {
		const {
			className,
			attributes: {
				columns,
			},
			setAttributes,
		} = props;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __('Row Settings') }>
						<RangeControl
							label={ __('Number of Columns') }
							value={ columns }
							onChange={
								(nextColumns) => {
									setAttributes({
										columns: nextColumns,
									});
								}
							}
							min={ 2 }
							max={ 6 }
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
			<div className="o-row">
				<InnerBlocks.Content />
			</div>
		);
	},
});
