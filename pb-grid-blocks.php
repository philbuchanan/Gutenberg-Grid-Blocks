<?php
/**
 * Plugin Name: Grid Blocks
 * Description: Gutenberg blocks for creating responsive grid rows, columns and block grids.
 * Version: 1.0.0
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
	 * Current plugin version number
	 */
	private function get_plugin_version() {
		$plugin_data = get_file_data(__FILE__, array('Version' => 'Version'), false);

		return (defined('WP_DEBUG') && WP_DEBUG) ? time() : $plugin_data['Version'];
	}



	/**
	 * Enqueue the block's assets for the wp-admin editor
	 */
	public function enqueue_block_editor_assets() {
		// Row/column grid
		wp_enqueue_script(
			'pb-grid-row-editor-scripts',
			plugins_url('blocks/grid-row.js', __FILE__),
			array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore'),
			$this->get_plugin_version(),
			true
		);

		wp_enqueue_script(
			'pb-grid-column-editor-scripts',
			plugins_url('blocks/grid-column.js', __FILE__),
			array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore'),
			$this->get_plugin_version(),
			true
		);



		// Block Brid
		wp_enqueue_script(
			'pb-blockgrid-editor-scripts',
			plugins_url('blocks/block-grid.js', __FILE__),
			array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore'),
			$this->get_plugin_version(),
			true
		);

		wp_enqueue_script(
			'pb-blockgrid-item-editor-scripts',
			plugins_url('blocks/block-grid-item.js', __FILE__),
			array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore'),
			$this->get_plugin_version(),
			true
		);



		// Styles
		wp_enqueue_style(
			'pb-grid-blocks-editor-styles',
			plugins_url('assets/editor.css', __FILE__),
			array('wp-edit-blocks'),
			$this->get_plugin_version()
		);
	}

}

$PB_Grid_Blocks = new PB_Grid_Blocks;

endif;
