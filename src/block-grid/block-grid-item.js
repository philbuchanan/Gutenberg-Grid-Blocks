/**
 * WordPress dependencies
 */
const {__, setLocaleData} = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	InnerBlocks,
} = wp.blockEditor;

const {
	SVG,
	Path,
} = wp.components;

registerBlockType('pb/block-grid-item', {
	title: __('Block Grid Item', 'pb'),
	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
			<Path d="M18,1H2A1,1,0,0,0,1,2V18a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V2A1,1,0,0,0,18,1ZM17,17H3V3H17Z" />
		</SVG>,
	parent: ['pb/block-grid-item'],
	category: 'layout',
	supports: {
		className: false,
		inserter: false,
	},
	edit: (props) => {
		return (
			<div className="o-block-grid__item">
				<InnerBlocks templateLock={ false } />
			</div>
		);
	},
	save: (props) => {
		return (
			<div className="o-block-grid__item">
				<InnerBlocks.Content />
			</div>
		);
	},
});
