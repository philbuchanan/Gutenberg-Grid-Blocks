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
	classes = [
		'o-col'
	];

	if (attributes.xs) classes.push('u-' + attributes.xs + 'of12');
	if (attributes.sm) classes.push('u-' + attributes.sm + 'of12-sm');
	if (attributes.md) classes.push('u-' + attributes.md + 'of12-md');
	if (attributes.lg) classes.push('u-' + attributes.lg + 'of12-lg');
	if (attributes.xl) classes.push('u-' + attributes.xl + 'of12-xl');

	return classes.join(' ');
};

registerBlockType('pb/column', {
	title: __('Grid Column'),
	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path fill="none" d="M0 0h24v24H0V0z" />
			<Path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z" />
		</SVG>,
	category: 'layout',
	parent: ['pb/row'],
	supports: {
		className: false,
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
	},
	edit: (props) => {
		const {
			className,
			attributes: {
				xs,
				sm,
				md,
				lg,
				xl,
			},
			setAttributes,
		} = props;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __('Column Settings') }>
						<RangeControl
							label={ __('Extra Small Span') }
							value={ xs }
							onChange={
								(spanCount) => {
									setAttributes({
										xs: spanCount,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Small Span') }
							value={ sm }
							onChange={
								(spanCount) => {
									setAttributes({
										sm: spanCount,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Medium Span') }
							value={ md }
							onChange={
								(spanCount) => {
									setAttributes({
										md: spanCount,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Large Span') }
							value={ lg }
							onChange={
								(spanCount) => {
									setAttributes({
										lg: spanCount,
									});
								}
							}
							min={ 1 }
							max={ 11 }
						/>
						<RangeControl
							label={ __('Extra Large Span') }
							value={ xl }
							onChange={
								(spanCount) => {
									setAttributes({
										xl: spanCount,
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
