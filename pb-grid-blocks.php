<?php
/**
 * Plugin Name: Grid Blocks
 * Description: Gutenberg blocks for creating responsive grid rows, columns and block grids.
 * Version: 2.1.1
 * Author: Phil Buchanan
 * Author URI: https://philbuchanan.com
 */

defined('ABSPATH') || exit;

// Make sure to not redeclare the class
if (!class_exists('PB_Grid_Blocks')) :

class PB_Grid_Blocks {

	public $plugin_version;



	/**
	 * Class constructor
	 * Sets up the plugin, including: textdomain and registering scripts.
	 */
	function __construct() {
		$basename = plugin_basename(__FILE__);

		$this->plugin_version = $this->get_plugin_version();

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
		$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

		wp_enqueue_script(
			'pb-grid-blocks-editor-scripts',
			plugins_url('build/index.js', __FILE__),
			array_merge($asset_file['dependencies'], array(
				//'wp-edit-post',
			)),
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
