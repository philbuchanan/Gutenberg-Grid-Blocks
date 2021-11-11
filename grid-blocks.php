<?php
/**
 * Plugin Name: Grid Blocks
 * Description: Gutenberg blocks for creating responsive grid rows, columns, and block grids.
 * Version: 5.9.0
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
		$asset_file = include(get_template_directory() . '/blocks/build/index.asset.php');

		wp_register_script(
			'pb-grid-blocks-editor-scripts',
			plugins_url('build/index.js', __FILE__),
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);

		wp_register_style(
			'pb-grid-blocks-editor-styles',
			plugins_url('build/index.css', __FILE__),
			array('wp-edit-blocks'),
			$asset_file['version']
		);

		$register_blocks = array(
			'block-grid/block-grid',
			'block-grid/block-grid-item',
			'columns/row',
			'columns/column',
		);

		foreach($register_blocks as $json_file) {
			register_block_type(
				plugin_dir_path(__FILE__) . 'src/' . $json_file . '/block.json',
				array(
					'editor_script' => 'pb-grid-blocks-editor-scripts',
					'editor_style'  => 'pb-grid-blocks-editor-styles',
				)
			);
		}
	}

}

$PB_Grid_Blocks = new PB_Grid_Blocks;

endif;
