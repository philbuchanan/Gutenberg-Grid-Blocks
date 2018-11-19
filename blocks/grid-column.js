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
				default: 6,
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
							title: i18n.__('Grid Column Spans'),
							className: 'grid-column-settings'
						},
						el(components.RangeControl, {
							label: i18n.__('Tiny Span'),
							value: attributes.tiny,
							onChange: function(value) {
								props.setAttributes({
									tiny: value,
								});
							},
							min: 1,
							max: 12
						}),
						el(components.RangeControl, {
							label: i18n.__('Small Span'),
							value: attributes.small,
							onChange: function(value) {
								props.setAttributes({
									small: value,
								});
							},
							min: 1,
							max: 12
						}),
						el(components.RangeControl, {
							label: i18n.__('Medium Span'),
							value: attributes.medium,
							onChange: function(value) {
								props.setAttributes({
									medium: value,
								});
							},
							min: 1,
							max: 12
						}),
						el(components.RangeControl, {
							label: i18n.__('Large Span'),
							value: attributes.large,
							onChange: function(value) {
								props.setAttributes({
									large: value,
								});
							},
							min: 1,
							max: 12
						}),
						el(components.RangeControl, {
							label: i18n.__('Full Span'),
							value: attributes.full,
							onChange: function(value) {
								props.setAttributes({
									full: value,
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

			if (attributes.tiny)   classes.push('u-' + attributes.tiny + 'of12');
			if (attributes.small)  classes.push('u-' + attributes.small + 'of12-small');
			if (attributes.medium) classes.push('u-' + attributes.medium + 'of12-medium');
			if (attributes.large)  classes.push('u-' + attributes.large + 'of12-large');
			if (attributes.full)   classes.push('u-' + attributes.full + 'of12-full');

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
