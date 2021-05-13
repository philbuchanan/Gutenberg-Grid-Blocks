/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { NumberControl } from './';
import {
	xsScreen,
	smScreen,
	mdScreen,
	lgScreen,
	xlScreen,
} from './icons';

const OffsetPanel = ({
	attributes,
	setAttributes,
}) => {
	const {
		offsetxs,
		offsetsm,
		offsetmd,
		offsetlg,
		offsetxl,
	} = attributes;

	return (
		<PanelBody
			title={ __('Column Offsets', 'pb') }
			initialOpen={ !!(offsetxs || offsetsm || offsetmd || offsetlg || offsetxl) }
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
	);
};

export default OffsetPanel;
