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

const ColumnSpanPanel = ({
	attributes,
	setAttributes,
	initialOpen = true,
	help,
}) => {
	const {
		xs,
		sm,
		md,
		lg,
		xl,
	} = attributes;

	return (
		<PanelBody
			title={ __('Column Spans', 'pb') }
			initialOpen={ initialOpen }
		>
			<p>{ __('How many columns of the 12-column grid should this container span at each screen size?', 'pb') }</p>
			{ !!help && (
				<p>{ help }</p>
			) }
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
	);
};

export default ColumnSpanPanel;
