/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import classnames from '../../utils/classnames';
import HidePanel from '../../components/hide-panel';

const BlockGridItemEdit = ({
	className,
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) => {
	const {
		hidexs,
		hidesm,
		hidemd,
		hidelg,
		hidexl,
	} = attributes;

	const hasInnerBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocks(clientId).length > 0;
	});

	return (
		<Fragment>
			<InspectorControls>
				<HidePanel
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
			<div className={ classnames('o-block-grid__item', className, {
				'block-has-no-inner-blocks': !hasInnerBlocks,
			}) }>
				<InnerBlocks
					renderAppender={ isSelected || !hasInnerBlocks ? () => (
						<InnerBlocks.ButtonBlockAppender />
					) : false }
				/>
			</div>
		</Fragment>
	);
}

export default BlockGridItemEdit;
