/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { PanelBody } from '@wordpress/components';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import NumberControl from '../../components/number-control';
import HidePanel from '../../components/hide-panel';
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
				<PanelBody title={ __('Column Spans', 'pb') }>
					<p>{ __('How many columns of the 12-column grid should this container span at each screen size?', 'pb') }</p>
					<NumberControl
						label={ __('Extra Small Screens', 'pb') }
						onChange={ (xs) => setAttributes({xs}) }
						value={ xs }
						parentAttributes={ attributes }
						size="xs"
						allowReset={ true }
						showPercentage={ true }
						icon={ xsScreen }
					/>
					<NumberControl
						label={ __('Small Screens', 'pb') }
						onChange={ (sm) => setAttributes({sm}) }
						value={ sm }
						parentAttributes={ attributes }
						size="sm"
						allowReset={ true }
						showPercentage={ true }
						icon={ smScreen }
					/>
					<NumberControl
						label={ __('Medium Screens', 'pb') }
						onChange={ (md) => setAttributes({md}) }
						value={ md }
						parentAttributes={ attributes }
						size="md"
						allowReset={ true }
						showPercentage={ true }
						icon={ mdScreen }
					/>
					<NumberControl
						label={ __('Large Screens', 'pb') }
						onChange={ (lg) => setAttributes({lg}) }
						value={ lg }
						parentAttributes={ attributes }
						size="lg"
						allowReset={ true }
						showPercentage={ true }
						icon={ lgScreen }
					/>
					<NumberControl
						label={ __('Extral Large Screens', 'pb') }
						onChange={ (xl) => setAttributes({xl}) }
						value={ xl }
						parentAttributes={ attributes }
						size="xl"
						allowReset={ true }
						showPercentage={ true }
						icon={ xlScreen }
					/>
				</PanelBody>
				<PanelBody
					title={ __('Column Offsets', 'pb') }
					initialOpen={ false }
				>
					<p>{ __('How many columns of the 12-column grid should this container be offset by at each screen size?', 'pb') }</p>
					<NumberControl
						label={ __('Extra Small Screen Offset', 'pb') }
						onChange={ (offsetxs) => setAttributes({offsetxs}) }
						value={ offsetxs }
						allowReset={ true }
						icon={ xsScreen }
						max={ 11 }
					/>
					<NumberControl
						label={ __('Small Screen Offset', 'pb') }
						onChange={ (offsetsm) => setAttributes({offsetsm}) }
						value={ offsetsm }
						allowReset={ true }
						icon={ smScreen }
						max={ 11 }
					/>
					<NumberControl
						label={ __('Medium Screen Offset', 'pb') }
						onChange={ (offsetmd) => setAttributes({offsetmd}) }
						value={ offsetmd }
						allowReset={ true }
						icon={ mdScreen }
						max={ 11 }
					/>
					<NumberControl
						label={ __('Large Screen Offset', 'pb') }
						onChange={ (offsetlg) => setAttributes({offsetlg}) }
						value={ offsetlg }
						allowReset={ true }
						icon={ lgScreen }
						max={ 11 }
					/>
					<NumberControl
						label={ __('Extral Large Screen Offset', 'pb') }
						onChange={ (offsetxl) => setAttributes({offsetxl}) }
						value={ offsetxl }
						allowReset={ true }
						icon={ xlScreen }
						max={ 11 }
					/>
				</PanelBody>
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
