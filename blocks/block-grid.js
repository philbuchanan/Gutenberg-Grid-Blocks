(function(blocks, editor, i18n, element, components, _) {
	var el = element.createElement;

	blocks.registerBlockType('pb/block-grid', {
		title: i18n.__('Block Grid'),
		icon: 'grid-view',
		category: 'layout',
		keywords: [
			'blockgrid',
			'grid',
			'columns',
		],
		supports: {},
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: '.o-block-grid',
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
				default: 3,
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
					editor.InspectorControls, {key: 'block-grid-controls'},
					el(components.PanelBody,
						{
							title: i18n.__('Block Grid Settings'),
							className: 'block-grid-settings'
						},
						el(components.RangeControl, {
							label: i18n.__('Extra Small'),
							value: attributes.xs,
							onChange: function(value) {
								props.setAttributes({
									xs: value,
								});
							},
							min: 1,
							max: 6
						}),
						el(components.RangeControl, {
							label: i18n.__('Small'),
							value: attributes.sm,
							onChange: function(value) {
								props.setAttributes({
									sm: value,
								});
							},
							min: 1,
							max: 6
						}),
						el(components.RangeControl, {
						label: i18n.__('Medium'),
							value: attributes.md,
							onChange: function(value) {
								props.setAttributes({
									md: value,
								});
							},
							min: 1,
							max: 6
						}),
						el(components.RangeControl, {
							label: i18n.__('Large'),
							value: attributes.lg,
							onChange: function(value) {
								props.setAttributes({
									lg: value,
								});
							},
							min: 1,
							max: 6
						}),
						el(components.RangeControl, {
							label: i18n.__('Extra Large'),
							value: attributes.xl,
							onChange: function(value) {
								props.setAttributes({
									xl: value,
								});
							},
							min: 1,
							max: 6
						}),
					),
				),
				el('div',
					{
						key: 'block-grid-container',
						className: 'o-block-grid',
					},
					el(editor.InnerBlocks, {
						allowedBlocks: [
							'pb/block-grid-item'
						]
					}),
				),
			];
		},
		save: function(props) {
			var attributes = props.attributes;

			classes = [
				'o-block-grid'
			];

			if (attributes.xs) classes.push('o-block-grid-' + attributes.xs);
			if (attributes.sm) classes.push('o-block-grid-' + attributes.sm + '-sm');
			if (attributes.md) classes.push('o-block-grid-' + attributes.md + '-md');
			if (attributes.lg) classes.push('o-block-grid-' + attributes.lg + '-lg');
			if (attributes.xl) classes.push('o-block-grid-' + attributes.xl + '-xl');

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
