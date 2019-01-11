(function(blocks, editor, i18n, element, components, _) {
	var el = element.createElement;

	blocks.registerBlockType('pb/block-grid-item', {
		title: i18n.__('Block Grid Item'),
		icon: 'plus',
		category: 'layout',
		keywords: [
			'blockgrid',
			'grid',
			'columns',
		],
		parent: [
			'pb/block-grid'
		],
		supports: {},
		className: false,
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: '.o-block-grid__item',
			},
		},
		edit: function(props) {
			var attributes = props.attributes;

			return [
				el('div',
					{
						key: 'block-grid-item-container',
						className: 'o-block-grid__item',
					},
					el(editor.InnerBlocks),
				),
			];
		},
		save: function(props) {
			return (
				el('div', {className: 'o-block-grid__item'},
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
