/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	BaseControl,
} from '@wordpress/components';

/**
 * Internal dependncies
 */
import NumberControl from '../../components/number-control';
import GridAlignmentToolbar from '../../components/alignment-toolbar';
import getAlignmentClasses from '../../alignments';

export default ({
	className,
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		alignVertically,
		alignHorizontally,
	} = attributes;

	const childBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
	});

	const getColumnSpanClasses = () => {
		let columnClasses = [
			className,
		];

		if (childBlocks && childBlocks.length) {
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
		}

		return columnClasses;
	}

	return (
		<Fragment>
			<BlockControls>
				<GridAlignmentToolbar
					type="horizontal"
					selected={ alignHorizontally }
					onChange={ (alignHorizontally) => setAttributes({alignHorizontally}) }
					isCollapsed={ true }
				/>
				<GridAlignmentToolbar
					type="vertical"
					selected={ alignVertically }
					onChange={ (alignVertically) => setAttributes({alignVertically}) }
					isCollapsed={ true }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __('Alignment', 'pb') }>
					<BaseControl label={ __('Align Horiztonally', 'pb') }>
						<GridAlignmentToolbar
							type="horizontal"
							selected={ alignHorizontally }
							onChange={ (alignHorizontally) => setAttributes({alignHorizontally}) }
						/>
					</BaseControl>
					<BaseControl label={ __('Align Vertically', 'pb') }>
						<GridAlignmentToolbar
							type="vertical"
							selected={ alignVertically }
							onChange={ (alignVertically) => setAttributes({alignVertically}) }
						/>
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
