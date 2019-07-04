/**
 * WordPress dependencies
 */
const {
	InnerBlocks,
} = wp.blockEditor;



export default (props) => {
	return (
		<div className="o-block-grid__item">
			<InnerBlocks />
		</div>
	);
}
