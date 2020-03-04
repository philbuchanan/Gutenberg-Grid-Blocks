/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

export default ({
	className,
}) => {
	return (
		<div className={ 'o-block-grid__item ' + className }>
			<InnerBlocks />
		</div>
	);
}
