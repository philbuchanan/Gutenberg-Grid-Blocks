/**
 * WordPress dependencies
 */
const {
	createBlock,
} = wp.blocks;



export default {
	to: [
		{
			type: 'block',
			blocks: ['pb/block-grid'],
			transform: (attributes, innerBlocks) => {
				const sizes = {
					xs: '',
					sm: '',
					md: '',
					lg: '',
					xl: '',
				};

				const newInnerBlocks = innerBlocks.map((block, index) => {
					/**
					 * Use the first column as the basis for setting block grid
					 * items per line.
					 */
					if (index === 0) {
						/**
						 * Convert columns spans to equivalent block grid items
						 * per line. e.g. A block spanning 3 columns is
						 * equivalent to 4 items per line in the block grid
						 * (12 / 3 = 4).
						 */
						for (let key in sizes) {
							if (sizes.hasOwnProperty(key) && block.attributes[key]) {
								const perLine = Math.floor(12 / block.attributes[key]);

								sizes[key] = (perLine < 1 || perLine > 6) ? '' : perLine;
							}
						}
					}

					return createBlock('pb/block-grid-item', {}, block.innerBlocks)
				});

				const newBlocks = createBlock('pb/block-grid', {
					alignVertically: attributes.alignVertically,
					alignHorizontally: attributes.alignHorizontally,
					...sizes,
				}, newInnerBlocks);

				return newBlocks;
			},
		},
	],
};
