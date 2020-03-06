/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, Path } from '@wordpress/components';

export default {
	title: __('Block Grid Item', 'pb'),

	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M4,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3Zm7,8V5H5v6Z" />
	</SVG>,

	parent: ['pb/block-grid'],

	category: 'layout',

	supports: {
		className: false,
		reusable: false,
	},
};
