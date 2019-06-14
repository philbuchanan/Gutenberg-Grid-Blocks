/**
 * WordPress dependencies
 */
const {
	withDispatch,
	withSelect
} = wp.data;

const {
	InnerBlocks,
} = wp.blockEditor;

const {
	compose
} = wp.compose;



function GridBlockItemEdit({
	attributes,
	hasChildBlocks,
}) {
	return (
		<div className="o-block-grid__item">
			<InnerBlocks
				templateLock={ false }
				renderAppender={ (
					hasChildBlocks ?
						undefined :
						() => <InnerBlocks.ButtonBlockAppender />
				) }
			/>
		</div>
	);
}

export default compose(
	withSelect( (select, ownProps) => {
		const {
			clientId,
		} = ownProps;

		const {
			getBlockOrder,
		} = select('core/block-editor');

		return {
			hasChildBlocks: getBlockOrder(clientId).length > 0,
		};
	} ),
)(GridBlockItemEdit);
