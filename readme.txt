=== Grid Blocks ===
Contributors: philbuchanan
Author URI: https://philbuchanan.com/
Tags: columns, block grid, gutenberg, block, responsive
Requires at least: 6.4
Tested up to: 6.4
Stable tag: 6.4.0
Requires PHP: 8.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Gutenberg blocks for creating responsive grid rows, columns, and block grids.

== Description ==

*Note:* This plugin requires a compatible theme developed by Aubs & Mugg Inc.

Gutenberg blocks is a plugin for creating advanced responsive grid rows, columns, and block grids. This plugin replaces the default Gutenberg Columns block.

== Changelog ==

= 6.4.0 =
* Fixed: Instance ID for NumberControl

= 6.3.0 =
* Fixed: Columns being forced to wrap to a new line

= 5.9.0 =
* Fixed: __experimentalUseInnerBlocksProps has been deprecated—now uses useInnerBlocksProps.save()
* Fixed: Use sass:math for division

= 5.8.1 =
* Fixed: Now registering blocks via block.json files

= 5.8.0 =
* New: Added support for useInnerBlockProps

= 5.7.1 =
* New: Automatically open setting panels that have values set
* New: Improved icons to better match existing WordPress icon set
* New: Removed block grid lager setting notice
* Fixed: NumberControl label for attributes

= 5.7.0 =
* Added: Column span and column offsets to block grid items
* Added: Now uses block API v2

= 5.6.4 =
* Fixed: Added horizontal orientation to InnerBlocks component of row and block grid blocks.

= 5.6.3 =
* New: Added centered column variation
* Fixed: 50/50 split column now sets attributes properly

= 5.6.2 =
* Plugin submitted to plugin repo

== Upgrade Notice ==

= 6.4.0 =
Fixes instance ID for NumberControl.

= 6.3.0 =
Fixes columns being forced to wrap to a new line.

= 5.9.0 =
Fixes __experimentalUseInnerBlocksProps deprecation.

= 5.8.1 =
Blocks now registered via block.json files.

= 5.8.0 =
Added support for useInnerBlockProps.

= 5.7.1 =
New icons. Automatically open setting panels that have values set. Fixed accessibility issue with NumberControl labels.

= 5.7.0 =
Uses block API v2 and adds column span and column offsets to block grid items.

= 5.6.4 =
Added horizontal orientation to InnerBlocks component of row and block grid blocks.

= 5.6.3 =
New block variations added.

= 5.6.2 =
Plugin submitted to plugin repo.
