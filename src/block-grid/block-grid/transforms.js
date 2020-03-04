/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

export default {
	to: [
		{
			type: 'block',
			blocks: ['pb/row'],
			transform: (attributes, innerBlocks) => {
				const sizes = {
					xs: '',
					sm: '',
					md: '',
					lg: '',
					xl: '',
				};

				/**
				 * Convert block grid items per line to equivalent column spans.
				 * e.g. 4 items per line is equivalent to spanning 3 columns in
				 * the grid (4 * 3 = 12).
				 */
				for (let key in sizes) {
					if (sizes.hasOwnProperty(key) && attributes[key]) {
						const span = Math.floor(12 / attributes[key]);

						sizes[key] = (span > 12 || span < 1) ? '' : span;
					}
				}

				const newInnerBlocks = innerBlocks.map((block) => createBlock('pb/column', sizes, block.innerBlocks));

				const newBlocks = createBlock('pb/row', {
					alignVertically: attributes.alignVertically,
					alignHorizontally: attributes.alignHorizontally,
				}, newInnerBlocks);

				return newBlocks;
			},
		},
	],
};
