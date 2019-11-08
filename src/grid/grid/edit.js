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

			let width = 12;
			let offset = 0;

			/**
			 * Since larger screen sizes inherit column spans from smaller
			 * screen sizes (if the large screen size doesn't have a span
			 * specified), we'll loop over each screen size until we find one
			 * with a setting, and use that span (or offset) to display content
			 * in the editor.
			 */
			const sizes = [
				'lg',
				'md',
				'sm',
				'xs',
			];

			for (let i = 0; i < sizes.length; i++) {
				if (item.attributes[sizes[i]]) {
					width = item.attributes[sizes[i]];
					break;
				}
			}

			for (let i = 0; i < sizes.length; i++) {
				if (item.attributes['offset' + sizes[i]]) {
					offset = item.attributes['offset' + sizes[i]];
					break;
				}
			};

			columnClasses.push(base + 'span-' + width);

			if (offset > 0) {
				columnClasses.push(base + 'offset-' + offset);
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
			<div className={ ['o-row', ...getColumnSpanClasses(), ...getAlignmentClasses(attributes)].join(' ') }>
				<InnerBlocks
					template={ [
						['pb/column', {
							md: 6,
						}],
						['pb/column', {
							md: 6,
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
