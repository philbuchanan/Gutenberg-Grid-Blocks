/**
 * WordPress dependencies
 */
import { unregisterBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

domReady(function() {
	// Default columns block is replaced by this plugin.
	unregisterBlockType('core/columns');
});
