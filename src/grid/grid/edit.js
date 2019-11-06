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
		alignVertically,
		alignHorizontally,
	} = attributes;

	const getColumnSpanClasses = () => {
		let columnClasses = [];

		childBlocks.map((item, index) => {
			let base = 'o-row--column-' + (index + 1) + '-';

			columnClasses.push(base + 'span-' + ((item.attributes.lg) ? item.attributes.lg : 12));

			if (item.attributes.offsetlg) {
				columnClasses.push(base + 'offset-' + item.attributes.offsetlg);
			}
		});

		return columnClasses;
	}

	const verticalControl = (value) => {
		let activeAlignment = alignmentControls[value];

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
		let alignment = alignmentControls[value];

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
			<div className={ ['o-row', 'o-row--columns-' + childBlocks.length, ...getColumnSpanClasses(), ...getAlignmentClasses(attributes)].join(' ') }>
				<InnerBlocks
					template={ [
						['pb/column', {
							md: 6,
							lg: 6,
						}],
						['pb/column', {
							md: 6,
							lg: 6,
						}],
					] }
					allowedBlocks={ ['pb/column'] }
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
