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
	RangeControl,
	SVG,
	Path,
} = wp.components;

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
		} = props;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __('Column Spans', 'pb') }>
						<p>{ __('How many columns of the 12-column grid should this container span at each screen size?', 'pb') }</p>
						<RangeControl
							label={ __('Extra Small Span', 'pb') }
							value={ attributes.xs }
							onChange={
								(count) => {
									setAttributes({
										xs: count,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Small Span', 'pb') }
							value={ attributes.sm }
							onChange={
								(count) => {
									setAttributes({
										sm: count,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Medium Span', 'pb') }
							value={ attributes.md }
							onChange={
								(count) => {
									setAttributes({
										md: count,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Large Span', 'pb') }
							value={ attributes.lg }
							onChange={
								(count) => {
									setAttributes({
										lg: count,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Extra Large Span', 'pb') }
							value={ attributes.xl }
							onChange={
								(count) => {
									setAttributes({
										xl: count,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
					</PanelBody>
					<PanelBody
						title={ __('Column Offsets', 'pb') }
						initialOpen={ false }
					>
						<p>{ __('How many columns of the 12-column grid should this container be offset by at each screen size?', 'pb') }</p>
						<RangeControl
							label={ __('Extra Small Offset', 'pb') }
							value={ attributes.offsetxs }
							onChange={
								(count) => {
									setAttributes({
										offsetxs: count,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Small Offset', 'pb') }
							value={ attributes.offsetsm }
							onChange={
								(count) => {
									setAttributes({
										offsetsm: count,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Medium Offset', 'pb') }
							value={ attributes.offsetmd }
							onChange={
								(count) => {
									setAttributes({
										offsetmd: count,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Large Offset', 'pb') }
							value={ attributes.offsetlg }
							onChange={
								(count) => {
									setAttributes({
										offsetlg: count,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Extra Large Offset', 'pb') }
							value={ attributes.offsetxl }
							onChange={
								(count) => {
									setAttributes({
										offsetxl: count,
									});
								}
							}
							min={ 1 }
							max={ 11 }
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
