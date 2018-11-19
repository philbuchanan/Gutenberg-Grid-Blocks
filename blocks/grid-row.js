(function(blocks, editor, i18n, element, components, _) {
	var el = element.createElement;

	blocks.registerBlockType('pb/grid-row', {
		title: i18n.__('Grid Row'),
		icon: el('svg',
			{
				width: 24,
				height: 24
			},
			el('path', {
				d: 'M0 0h24v24H0V0z',
				fill: 'none'
			}),
			el('path', {
				d: 'M21 4H3L2 5v14l1 1h18l1-1V5l-1-1zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z'
			}),
		),
		category: 'layout',
		keywords: [
			'row',
			'grid',
			'columns',
		],
		supports: {},
		className: false,
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: '.o-row',
			},
		},
		edit: function(props) {
			var attributes = props.attributes;

			return [
				el('div',
					{
						className: 'o-row',
					},
					el(editor.InnerBlocks, {
						allowedBlocks: [
							'pb/grid-column'
						]
					}),
				),
			];
		},
		save: function(props) {
			return (
				el('div', {className: 'o-row'},
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
