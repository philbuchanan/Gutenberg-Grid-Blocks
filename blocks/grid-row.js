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
	SVG,
	Path,
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

const getRowColumns = (attributes) => {
	var classes = [
		'o-row'
	];

	if (attributes.centerContentVertically) {
		switch(attributes.centerContentVertically) {
			case 'center':
				classes.push('u-align-items-center');
				break;
			case 'end':
				classes.push('u-align-items-end');
				break;
		}
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
			case 'end':
				classes.push('u-justify-content-end');
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
	title: __('Columns', 'pb'),
	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path d="M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z" />
		</SVG>,
	category: 'layout',
	keywords: [
		__('row', 'pb'),
		__('grid', 'pb'),
		__('span', 'pb'),
	],
	supports: {
		className: false,
	},
	attributes: {
		columns: {
			type: 'number',
			default: 2,
		},
		centerContentVertically: {
			type: 'sting',
			default: '',
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

		function verticalControl(value) {
			var activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[value];

			// Set control active state
			var isActive = false;

			if (centerContentVertically !== undefined) {
				isActive = centerContentVertically === activeAlignment.value;
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
					'centerContentVertically': activeAlignment.value,
				}),
			};
		}

		function horizontalControl(value) {
			var activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[value];

			// Set control active state
			var isActive = false;

			if (alignColumnsHorizontally !== undefined) {
				isActive = alignColumnsHorizontally === activeAlignment.value;
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
					'alignColumnsHorizontally': activeAlignment.value,
				}),
			};
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __('Number of Columns', 'pb') }>
						<RangeControl
							label={ __('How many column containers do you want?', 'pb') }
							help={ __('Be careful: If you reduce the number of column containers, you will loose your existing content in the containers removed.', 'pb') }
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
					<PanelBody
						title={ __('Column & Content Alignment', 'pb') }
						initialOpen={ false }
					>
						<BaseControl label={ __('Align Column Content Vertically', 'pb') }>
							<Toolbar controls={
								[
									'top',
									'centerVertical',
									'bottom',
								].map(verticalControl)
							} />
						</BaseControl>
						<BaseControl label={ __('Align Columns Horiztonally', 'pb') }>
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
