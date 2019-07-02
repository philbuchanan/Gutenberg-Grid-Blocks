/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	withDispatch,
	withSelect
} = wp.data;

const {
	compose
} = wp.compose;

const {
	Fragment,
} = wp.element;

const {
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
} = wp.components;



/**
 * Internal dependencies
 */
import NumberControl from '../../components/number-control';

import {
	xsScreen,
	smScreen,
	mdScreen,
	lgScreen,
	xlScreen,
} from '../../icons';

import getColumnClasses from './classes';



function GridColumnItemEdit({
	className,
	attributes,
	setAttributes,
	instanceId,
}) {
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __('Column Spans', 'pb') }>
					<p>{ __('How many columns of the 12-column grid should this container span at each screen size?', 'pb') }</p>
					<NumberControl
						label={ __('Extra Small Screens', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									xs: count,
								});
							}
						}
						value={ attributes.xs }
						allowReset={ true }
						icon={ xsScreen }
					/>
					<NumberControl
						label={ __('Small Screens', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									sm: count,
								});
							}
						}
						value={ attributes.sm }
						allowReset={ true }
						icon={ smScreen }
					/>
					<NumberControl
						label={ __('Medium Screens', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									md: count,
								});
							}
						}
						value={ attributes.md }
						allowReset={ true }
						icon={ mdScreen }
					/>
					<NumberControl
						label={ __('Large Screens', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									lg: count,
								});
							}
						}
						value={ attributes.lg }
						allowReset={ true }
						icon={ lgScreen }
					/>
					<NumberControl
						label={ __('Extral Large Screens', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									xl: count,
								});
							}
						}
						value={ attributes.xl }
						allowReset={ true }
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
						onChange={
							(count) => {
								setAttributes({
									offsetxs: count,
								});
							}
						}
						value={ attributes.offsetxs }
						allowReset={ true }
						icon={ xsScreen }
					/>
					<NumberControl
						label={ __('Small Screen Offset', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									offsetsm: count,
								});
							}
						}
						value={ attributes.offsetsm }
						allowReset={ true }
						icon={ smScreen }
					/>
					<NumberControl
						label={ __('Medium Screen Offset', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									offsetmd: count,
								});
							}
						}
						value={ attributes.offsetmd }
						allowReset={ true }
						icon={ mdScreen }
					/>
					<NumberControl
						label={ __('Large Screen Offset', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									offsetlg: count,
								});
							}
						}
						value={ attributes.offsetlg }
						allowReset={ true }
						icon={ lgScreen }
					/>
					<NumberControl
						label={ __('Extral Large Screen Offset', 'pb') }
						onChange={
							(count) => {
								setAttributes({
									offsetxl: count,
								});
							}
						}
						value={ attributes.offsetxl }
						allowReset={ true }
						icon={ xlScreen }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ getColumnClasses(attributes) }>
				<InnerBlocks
					templateLock={ false }
				/>
			</div>
		</Fragment>
	);
}

export default GridColumnItemEdit;
