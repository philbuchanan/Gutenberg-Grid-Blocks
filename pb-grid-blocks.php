<?php
/**
 * Plugin Name: Grid Blocks
 * Description: Gutenberg blocks for creating responsive grid rows, columns and block grids.
 * Version: 2.2.3
 * Author: Phil Buchanan
 * Author URI: https://philbuchanan.com
 */

defined('ABSPATH') || exit;

// Make sure to not redeclare the class
if (!class_exists('PB_Grid_Blocks')) :

class PB_Grid_Blocks {

	/**
	 * Class constructor
	 * Sets up the plugin, including: textdomain and registering scripts.
	 */
	function __construct() {
		$basename = plugin_basename(__FILE__);

		// Load text domain
		load_plugin_textdomain('pb', false, dirname($basename) . '/languages/');

		// Register blocks JavaScript and CSS
		add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_editor_assets'));
	}



	/**
	 * Enqueue the block's assets for the wp-admin editor
	 */
	public function enqueue_block_editor_assets() {
		$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

		wp_enqueue_script(
			'pb-grid-blocks-editor-scripts',
			plugins_url('build/index.js', __FILE__),
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);

		wp_enqueue_style(
			'pb-grid-blocks-editor-styles',
			plugins_url('assets/editor.css', __FILE__),
			array('wp-edit-blocks'),
			$asset_file['version']
		);
	}

}

$PB_Grid_Blocks = new PB_Grid_Blocks;

endif;
