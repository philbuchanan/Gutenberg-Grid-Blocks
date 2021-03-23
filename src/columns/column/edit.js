/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import {
	ColumnSpanPanel,
	OffsetPanel,
	HidePanel,
} from '../../components/';
import {
	xsScreen,
	smScreen,
	mdScreen,
	lgScreen,
	xlScreen,
} from '../../components/icons';
import classnames from '../../utils/classnames';

const ColumnEdit = ({
	attributes,
	setAttributes,
	clientId,
}) => {
	const {
		xs,
		sm,
		md,
		lg,
		xl,
		offsetxs,
		offsetsm,
		offsetmd,
		offsetlg,
		offsetxl,
	} = attributes;

	const blockProps = useBlockProps({
		className: classnames('o-col', [
			xs ? `u-${ xs }of12` : '',
			sm ? `u-${ sm }of12-sm` : '',
			md ? `u-${ md }of12-md` : '',
			lg ? `u-${ lg }of12-lg` : '',
			xl ? `u-${ xl }of12-xl` : '',
			offsetxs ? `u-offset-${ offsetxs }of12` : '',
			offsetsm ? `u-offset-${ offsetsm }of12-sm` : '',
			offsetmd ? `u-offset-${ offsetmd }of12-md` : '',
			offsetlg ? `u-offset-${ offsetlg }of12-lg` : '',
			offsetxl ? `u-offset-${ offsetxl }of12-xl` : '',
		]),
	});

	const hasChildBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocks(clientId).length > 0;
	}, [clientId]);

	return (
		<Fragment>
			<InspectorControls>
				<ColumnSpanPanel
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
				<OffsetPanel
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
				<HidePanel
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks
					templateLock={ false }
					renderAppender={ hasChildBlocks
						? undefined
						: InnerBlocks.ButtonBlockAppender
					}
				/>
			</div>
		</Fragment>
	);
}

export default ColumnEdit;
