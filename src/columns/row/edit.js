/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import {
	BlockControls,
	InnerBlocks,
} from '@wordpress/block-editor';

/**
 * Internal dependncies
 */
import NumberControl from '../../components/number-control';
import GridAlignmentToolbar from '../../components/alignment-toolbar';
import classnames from '../../utils/classnames';

const RowEdit = ({
	className,
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) => {
	const {
		alignVertically,
		alignHorizontally,
	} = attributes;

	const childBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
	});

	let columnClasses = [];

	if (childBlocks && childBlocks.length) {
		childBlocks.map((item, index) => {
			const base = `column-${ (index + 1) }-`;

			const sizes = [
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
			];

			sizes.forEach((size, index) => {
				let breakpoint = size === 'xs' ? '' : size;

				if (item.attributes[size]) {
					columnClasses.push(`${ base }span-${ item.attributes[size] }-${ breakpoint }`);
				}

				const offsetSize = `offset${ size }`;

				if (item.attributes[offsetSize]) {
					columnClasses.push(`${ base }offset-${ item.attributes[offsetSize] }-${ breakpoint }`);
				}
			});
		});
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
			<div className={ classnames('o-row', className, columnClasses, {
				'u-justify-content-center': alignHorizontally === 'centerHorizontal',
				'u-justify-content-space-between': alignHorizontally === 'spaceBetween',
				'u-justify-content-space-around': alignHorizontally === 'spaceAround',
				'u-justify-content-end': alignHorizontally === 'right',
				'u-align-items-center': alignVertically === 'centerVertical',
				'u-align-items-end': alignVertically === 'bottom',
			}) }>
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
					renderAppender={ isSelected ? () => (
						<InnerBlocks.ButtonBlockAppender />
					) : null }
				/>
			</div>
		</Fragment>
	);
};

export default RowEdit;
