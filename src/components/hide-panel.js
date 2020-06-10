/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, Notice } from '@wordpress/components';

const HidePanel = ({
	attributes,
	setAttributes,
}) => {
	const {
		hidexs,
		hidesm,
		hidemd,
		hidelg,
		hidexl,
	} = attributes;

	const completelyHidden = hidexs && hidesm && hidemd && hidelg && hidexl;

	return (
		<PanelBody
			title={ __('Hide Item', 'pb') }
			initialOpen={ false }
		>
			{ completelyHidden && (
				<div style={ {margin: '0 -15px 24px'} }>
					<Notice
						status="warning"
						isDismissible={ false }
						politeness="polite"
					>
						{ __('Based on the current settings, this item will not be displayed at any screen size.', 'pb') }
					</Notice>
				</div>
			) }
			{ [
				{
					size: 'xs',
					value: hidexs,
					label: __('Hide on extra small screens', 'pb'),
				},
				{
					size: 'sm',
					value: hidesm,
					label: __('Hide on small screens', 'pb'),
				},
				{
					size: 'md',
					value: hidemd,
					label: __('Hide on medium screens', 'pb'),
				},
				{
					size: 'lg',
					value: hidelg,
					label: __('Hide on large screens', 'pb'),
				},
				{
					size: 'xl',
					value: hidexl,
					label: __('Hide on extra large screens', 'pb'),
				},
			].map((size, index) => {
				return (
					<ToggleControl
						key={ `size-${ size.size }` }
						label={ size.label }
						onChange={ (value) => {
							let newSize = {};

							newSize[`hide${ size.size }`] = value;

							setAttributes(newSize);
						} }
						checked={ size.value }
					/>
				);
			}) }
		</PanelBody>
	);
};

export default HidePanel;
