/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	withSelect,
} = wp.data;

const {
	compose,
} = wp.compose;

const {
	Fragment,
} = wp.element;

const {
	select,
} = wp.data;

const {
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	BaseControl,
	Toolbar,
} = wp.components;



/**
 * Internal dependncies
 */
import NumberControl from '../../components/number-control';

import {
	alignmentControls,
	getAlignmentClasses,
} from '../../alignments';



const GridBlockEdit = ({
	className,
	attributes,
	setAttributes,
	childBlocks,
}) => {
	const {
		columns,
		alignVertically,
		alignHorizontally,
	} = attributes;

	const getColumnsTemplate = (columns) => {
		var template = [];

		for (var i = 0; i < columns; i++) {
			template.push(['pb/column']);
		}

		return template;
	};

	const getColumnSpanClasses = () => {
		var columnClasses = [];

		childBlocks.map((item, index) => {
			var base = 'o-row--column-' + (index + 1) + '-';

			columnClasses.push(base + 'span-' + ((item.attributes.lg) ? item.attributes.lg : 12));

			if (item.attributes.offsetlg) {
				columnClasses.push(base + 'offset-' + item.attributes.offsetlg);
			}
		});

		return columnClasses;
	}

	const verticalControl = (value) => {
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

	const horizontalControl = (value) => {
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
				<PanelBody title={ __('Number of Columns', 'pb') }>
					<NumberControl
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
						max={ 6 }
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
			<div className={ ['o-row', 'o-row--columns-' + columns, ...getColumnSpanClasses(), ...getAlignmentClasses(attributes)].join(' ') }>
				<InnerBlocks
					template={ getColumnsTemplate(columns) }
					templateLock="all"
					allowedBlocks={[
						'pb/column'
					]}
				/>
			</div>
		</Fragment>
	);
};

export default compose(
	withSelect((select, ownProps) => {
		return {
			childBlocks: select('core/block-editor').getBlocksByClientId(ownProps.clientId)[0].innerBlocks,
		};
	}),
)(GridBlockEdit);
