<?php
/**
 * Plugin Name: Grid Blocks
 * Description: Gutenberg blocks for creating responsive grid rows, columns, and block grids.
 * Version: 5.8.0
 * Requires at least: 5.8
 * Requires PHP: 7.3
 * Author: Phil Buchanan
 * Author URI: https://philbuchanan.com
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

defined('ABSPATH') || exit;

// Make sure to not redeclare the class
if (!class_exists('PB_Grid_Blocks')) :

class PB_Grid_Blocks {

	function __construct() {
		add_action('init', array($this, 'register_blocks'));
	}

	public function register_blocks() {
		register_block_type_from_metadata(__DIR__ . '/src/block-grid/block-grid/block.json');
		register_block_type_from_metadata(__DIR__ . '/src/block-grid/block-grid-item/block.json');
		register_block_type_from_metadata(__DIR__ . '/src/columns/row/block.json');
		register_block_type_from_metadata(__DIR__ . '/src/columns/column/block.json');
	}

}

$PB_Grid_Blocks = new PB_Grid_Blocks;

endif;
