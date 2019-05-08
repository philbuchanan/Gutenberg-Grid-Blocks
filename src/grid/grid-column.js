/**
 * WordPress dependencies
 */
const {__, setLocaleData} = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	Fragment,
} = wp.element;

const {
	InspectorControls,
	InnerBlocks,
} = wp.editor;

const {
	PanelBody,
	SVG,
	Path,
} = wp.components;



/**
 * Internal dependencies
 */
import NumberControl from '../number-control';



const getColumnClasses = (attributes) => {
	var classes = [
		'o-col'
	];

	if (attributes.xs) classes.push('u-' + attributes.xs + 'of12');
	if (attributes.sm) classes.push('u-' + attributes.sm + 'of12-sm');
	if (attributes.md) classes.push('u-' + attributes.md + 'of12-md');
	if (attributes.lg) classes.push('u-' + attributes.lg + 'of12-lg');
	if (attributes.xl) classes.push('u-' + attributes.xl + 'of12-xl');

	if (attributes.offsetxs) classes.push('u-offset-' + attributes.offsetxs + 'of12');
	if (attributes.offsetsm) classes.push('u-offset-' + attributes.offsetsm + 'of12-sm');
	if (attributes.offsetmd) classes.push('u-offset-' + attributes.offsetmd + 'of12-md');
	if (attributes.offsetlg) classes.push('u-offset-' + attributes.offsetlg + 'of12-lg');
	if (attributes.offsetxl) classes.push('u-offset-' + attributes.offsetxl + 'of12-xl');

	return classes.join(' ');
};

registerBlockType('pb/column', {
	title: __('Grid Column', 'pb'),
	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path fill="none" d="M0 0h24v24H0V0z" />
			<Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" />
		</SVG>,
	category: 'layout',
	parent: ['pb/row'],
	supports: {
		className: false,
		inserter: false,
	},
	attributes: {
		xs: {
			type: 'number',
			default: '',
		},
		sm: {
			type: 'number',
			default: '',
		},
		md: {
			type: 'number',
			default: '',
		},
		lg: {
			type: 'number',
			default: 6,
		},
		xl: {
			type: 'number',
			default: '',
		},
		offsetxs: {
			type: 'number',
			default: '',
		},
		offsetsm: {
			type: 'number',
			default: '',
		},
		offsetmd: {
			type: 'number',
			default: '',
		},
		offsetlg: {
			type: 'number',
			default: '',
		},
		offsetxl: {
			type: 'number',
			default: '',
		},
	},
	edit: (props) => {
		const {
			className,
			attributes,
			setAttributes,
			instanceId,
		} = props;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __('Column Spans', 'pb') }>
						<p>{ __('How many columns of the 12-column grid should this container span at each screen size?', 'pb') }</p>
						<NumberControl
							label={ __('Extra Small Span', 'pb') }
							onChange={
								(count) => {
									setAttributes({
										xs: count,
									});
								}
							}
							value={ attributes.xs }
							allowReset={ true }
						/>
						<NumberControl
							label={ __('Small Span', 'pb') }
							onChange={
								(count) => {
									setAttributes({
										sm: count,
									});
								}
							}
							value={ attributes.sm }
							allowReset={ true }
						/>
						<NumberControl
							label={ __('Medium Span', 'pb') }
							onChange={
								(count) => {
									setAttributes({
										md: count,
									});
								}
							}
							value={ attributes.md }
							allowReset={ true }
						/>
						<NumberControl
							label={ __('Large Span', 'pb') }
							onChange={
								(count) => {
									setAttributes({
										lg: count,
									});
								}
							}
							value={ attributes.lg }
							allowReset={ true }
						/>
						<NumberControl
							label={ __('Extral Large Span', 'pb') }
							onChange={
								(count) => {
									setAttributes({
										xl: count,
									});
								}
							}
							value={ attributes.xl }
							allowReset={ true }
						/>
					</PanelBody>
					<PanelBody
						title={ __('Column Offsets', 'pb') }
						initialOpen={ false }
					>
						<p>{ __('How many columns of the 12-column grid should this container be offset by at each screen size?', 'pb') }</p>
						<NumberControl
							label={ __('Extra Small Offset', 'pb') }
							onChange={
								(count) => {
									setAttributes({
										offsetxs: count,
									});
								}
							}
							value={ attributes.offsetxs }
							allowReset={ true }
						/>
						<NumberControl
							label={ __('Small Offset', 'pb') }
							onChange={
								(count) => {
									setAttributes({
										offsetsm: count,
									});
								}
							}
							value={ attributes.offsetsm }
							allowReset={ true }
						/>
						<NumberControl
							label={ __('Medium Offset', 'pb') }
							onChange={
								(count) => {
									setAttributes({
										offsetmd: count,
									});
								}
							}
							value={ attributes.offsetmd }
							allowReset={ true }
						/>
						<NumberControl
							label={ __('Large Offset', 'pb') }
							onChange={
								(count) => {
									setAttributes({
										offsetlg: count,
									});
								}
							}
							value={ attributes.offsetlg }
							allowReset={ true }
						/>
						<NumberControl
							label={ __('Extral Large Offset', 'pb') }
							onChange={
								(count) => {
									setAttributes({
										offsetxl: count,
									});
								}
							}
							value={ attributes.offsetxl }
							allowReset={ true }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ getColumnClasses(props.attributes) }>
					<InnerBlocks templateLock={ false } />
				</div>
			</Fragment>
		);
	},
	save: (props) => {
		return (
			<div className={ getColumnClasses(props.attributes) }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
