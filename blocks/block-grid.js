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
			tiny: {
				type: 'number',
				default: null,
			},
			small: {
				type: 'number',
				default: null,
			},
			medium: {
				type: 'number',
				default: null,
			},
			large: {
				type: 'number',
				default: 3,
			},
			full: {
				type: 'number',
				default: null,
			},
		},
		edit: function(props) {
			var attributes = props.attributes;

			return [
				el(
					editor.InspectorControls, {},
					el(components.PanelBody,
						{
							title: i18n.__('Block Grid Settings'),
							className: 'block-grid-settings'
						},
						el(components.RangeControl, {
							label: i18n.__('Tiny'),
							value: attributes.tiny,
							onChange: function(value) {
								props.setAttributes({
									tiny: value,
								});
							},
							min: 1,
							max: 6
						}),
						el(components.RangeControl, {
							label: i18n.__('Small'),
							value: attributes.small,
							onChange: function(value) {
								props.setAttributes({
									small: value,
								});
							},
							min: 1,
							max: 6
						}),
						el(components.RangeControl, {
							label: i18n.__('Medium'),
							value: attributes.medium,
							onChange: function(value) {
								props.setAttributes({
									medium: value,
								});
							},
							min: 1,
							max: 6
						}),
						el(components.RangeControl, {
							label: i18n.__('Large'),
							value: attributes.large,
							onChange: function(value) {
								props.setAttributes({
									large: value,
								});
							},
							min: 1,
							max: 6
						}),
						el(components.RangeControl, {
							label: i18n.__('Full'),
							value: attributes.full,
							onChange: function(value) {
								props.setAttributes({
									full: value,
								});
							},
							min: 1,
							max: 6
						}),
					),
				),
				el('div',
					{
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

			if (attributes.tiny)   classes.push('o-block-grid-' + attributes.tiny);
			if (attributes.small)  classes.push('o-block-grid-' + attributes.small + '-small');
			if (attributes.medium) classes.push('o-block-grid-' + attributes.medium + '-medium');
			if (attributes.large)  classes.push('o-block-grid-' + attributes.large + '-large');
			if (attributes.full)   classes.push('o-block-grid-' + attributes.full + '-full');

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
