(function(blocks, editor, i18n, element, components, _) {
	var el = element.createElement;

	blocks.registerBlockType('pb/grid-column', {
		title: i18n.__('Grid Column'),
		icon: 'plus',
		category: 'layout',
		keywords: [
			'row',
			'grid',
			'columns',
		],
		supports: {},
		parent: [
			'pb/grid-row'
		],
		className: false,
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: '.o-col',
			},
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
		edit: function(props) {
			var attributes = props.attributes;

			return [
				el(
					editor.InspectorControls, {},
					el(components.PanelBody,
						{
							title: i18n.__('Grid Column Spans'),
							className: 'grid-column-settings'
						},
						el(components.RangeControl, {
							label: i18n.__('Extra Small Span'),
							value: attributes.xs,
							onChange: function(value) {
								props.setAttributes({
									xs: value,
								});
							},
							min: 1,
							max: 12
						}),
						el(components.RangeControl, {
							label: i18n.__('Small Span'),
							value: attributes.sm,
							onChange: function(value) {
								props.setAttributes({
									sm: value,
								});
							},
							min: 1,
							max: 12
						}),
						el(components.RangeControl, {
							label: i18n.__('Medium Span'),
							value: attributes.md,
							onChange: function(value) {
								props.setAttributes({
									md: value,
								});
							},
							min: 1,
							max: 12
						}),
						el(components.RangeControl, {
							label: i18n.__('Large Span'),
							value: attributes.lg,
							onChange: function(value) {
								props.setAttributes({
									lg: value,
								});
							},
							min: 1,
							max: 12
						}),
						el(components.RangeControl, {
							label: i18n.__('Extra Large Span'),
							value: attributes.xl,
							onChange: function(value) {
								props.setAttributes({
									xl: value,
								});
							},
							min: 1,
							max: 12
						}),
					),
				),
				el('div',
					{
						className: 'o-col',
					},
					el(editor.InnerBlocks),
				),
			];
		},
		save: function(props) {
			var attributes = props.attributes;

			classes = [
				'o-col'
			];

			if (attributes.xs) classes.push('u-' + attributes.xs + 'of12');
			if (attributes.sm) classes.push('u-' + attributes.sm + 'of12-sm');
			if (attributes.md) classes.push('u-' + attributes.md + 'of12-md');
			if (attributes.lg) classes.push('u-' + attributes.lg + 'of12-lg');
			if (attributes.xl) classes.push('u-' + attributes.xl + 'of12-xl');

			return (
				el('div',
					{
						className: classes.join(' '),
					},
					el(editor.InnerBlocks.Content, {})
				)
			);
		},
	});
})(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components,
	window._,
);
