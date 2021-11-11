/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	ColumnSpanPanel,
	HidePanel,
	OffsetPanel,
} from '../../components/';
import classnames from '../../utils/classnames';

const BlockGridItemEdit = ({
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
		hidexs,
		hidesm,
		hidemd,
		hidelg,
		hidexl,
	} = attributes;

	const blockProps = useBlockProps({
		className: classnames(
			'o-block-grid__item',
			[
				xs ? `u-${ xs }of12` : '',
				sm ? `u-${ sm }of12-sm` : '',
				md ? `u-${ md }of12-md` : '',
				lg ? `u-${ lg }of12-lg` : '',
				xl ? `u-${ xl }of12-xl` : '',
			],
			[
				offsetxs ? `u-offset-${ offsetxs }of12` : '',
				offsetsm ? `u-offset-${ offsetsm }of12-sm` : '',
				offsetmd ? `u-offset-${ offsetmd }of12-md` : '',
				offsetlg ? `u-offset-${ offsetlg }of12-lg` : '',
				offsetxl ? `u-offset-${ offsetxl }of12-xl` : '',
			]
		),
	});

	const hasChildBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocks(clientId).length > 0;
	}, [clientId]);

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		renderAppender: hasChildBlocks
			? undefined
			: InnerBlocks.ButtonBlockAppender,
	});

	return (
		<Fragment>
			<InspectorControls>
				<ColumnSpanPanel
					attributes={ attributes }
					setAttributes={ setAttributes }
					initialOpen={ !!(xs || sm || md || lg || xl) }
					help={ __('This setting will override the “Block Grid Items Per Line” setting on the parent container.', 'pb') }
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
			<div { ...innerBlocksProps } />
		</Fragment>
	);
}

export default BlockGridItemEdit;
