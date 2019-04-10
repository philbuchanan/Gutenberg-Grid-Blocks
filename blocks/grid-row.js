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
	SVG,
	Path,
} = wp.components;



/**
 * Internal dependncies
 */
import NumberControl from './number-control';

import {
	alignmentControls,
	getAlignmentClasses,
} from './alignments';



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
		alignVertically: {
			type: 'sting',
			default: 'top',
		},
		alignHorizontally: {
			type: 'string',
			default: 'left',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes,
			setAttributes,
		} = props;

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
					<PanelBody title={ __('Number of Columns', 'pb') }>
						<NumberControl
							label={ __('How many column containers do you want?', 'pb') }
							help={ __('Be careful: If you reduce the number of column containers, you will loose your existing content in the containers removed.', 'pb') }
							value={ attributes.columns }
							onChange={
								(nextColumns) => {
									setAttributes({
										columns: nextColumns,
									});
								}
							}
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
				<div className={ 'o-row o-row--columns-' + attributes.columns }>
					<InnerBlocks
						template={ getColumnsTemplate(attributes.columns) }
						templateLock="all"
						allowedBlocks={[
							'pb/column'
						]}
					/>
				</div>
			</Fragment>
		);
	},
	save: (props) => {
		return (
			<div className={ ['o-row', ...getAlignmentClasses(props.attributes)].join(' ') }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
