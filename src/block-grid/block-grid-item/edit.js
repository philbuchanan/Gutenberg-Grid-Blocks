/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import classnames from '../../utils/classnames';

const BlockGridItemEdit = ({
	className,
	clientId,
	isSelected,
}) => {
	const hasInnerBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocks(clientId).length > 0;
	});

	return (
		<div className={ classnames('o-block-grid__item', className, {
			'block-has-no-inner-blocks': !hasInnerBlocks,
		}) }>
			<InnerBlocks
				renderAppender={ isSelected || !hasInnerBlocks ? () => (
					<InnerBlocks.ButtonBlockAppender />
				) : false }
			/>
		</div>
	);
}

export default BlockGridItemEdit;
