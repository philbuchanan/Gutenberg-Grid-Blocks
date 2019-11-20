/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
} = wp.blockEditor;



export default ({
	className,
}) => {
	return (
		<div className={ 'o-block-grid__item ' + className }>
			<InnerBlocks />
		</div>
	);
}
