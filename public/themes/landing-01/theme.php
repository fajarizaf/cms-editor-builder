<?php

/**
 * Vvveb
 *
 * Copyright (C) 2022  Ziadin Givan
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

/*
Name: Landing-01
Slug: landing-01
URI: https://nodebuilder.id
Author: Fajar Riza Fauzi
Author URI: https://nodebuilder.id
Description: Template social press
Version: 2.0
License:  Apache 2.0
License URI: https://nodebuilder.id/licence
Tags: blog, ecommerce
Text Domain: landing-01
*/
use function Vvveb\__;

return
	[
		'pages' => [/*
			'index' => [
				'name'        => 'index',
				'file'        => 'index.html',
				'url'         => '/themes/landing-01/index.html',
				'title' =>  __('Home page'),
				'folder'      => '',
				'description' => 'Website homepage',
			],
		 */
		],
		'components' => [
			['title' =>  __('Content'), 'name' =>  'content'],
			['title' => __('Ecommerce'), 'name' =>  'ecommerce'],
			['title' => __('Bootstrap 5'), 'name' =>  'bootstrap5'],
			['title' => __('Landing theme components'), 'name' =>  'landing', 'file'=> 'landing-components.js'],
		],
		'inputs' => [
			['title' =>  __('Slider inputs'), 'name' =>  'slider', 'file'=> 'slider-inputs.js'],
		],
		'ignoreFolders' => ['backup'],
	];
