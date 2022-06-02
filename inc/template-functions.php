<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package devmn
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function devmn_pl_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'devmn_pl_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function devmn_pl_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'devmn_pl_pingback_header' );

function emsi_custom_scripts() {
    wp_enqueue_style('romb-theme-bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css');
    wp_enqueue_style('romb-theme-fontsawesome', get_template_directory_uri() . '/css/all.min.css');
    wp_enqueue_style('romb-theme-custom', get_stylesheet_directory_uri() . '/css/style.css');

    wp_enqueue_style('romb-slick-global', get_stylesheet_directory_uri() . '/slick/slick.css');
    wp_enqueue_style('romb-slick-theme', get_stylesheet_directory_uri() . '/slick/slick-theme.css');

    wp_enqueue_script('romb-slick', get_template_directory_uri() . '/slick/slick.min.js', array('jquery'), '', true);
    wp_enqueue_script('romb-slick-slider', get_template_directory_uri() . '/src/js/slick-slider.js', array('jquery'), '', true);

    wp_enqueue_script('romb-navbar', get_template_directory_uri() . '/src/js/menu.js', array(), '', true);
    wp_enqueue_script('romb-animate', get_template_directory_uri() . '/src/js/animate.js', array('jquery'), '', true);
    wp_enqueue_script('romb-mobile-menu', get_template_directory_uri() . '/src/js/mobile-menu.js', array('jquery'), '', true);
    wp_enqueue_script('romb-bootstrap', get_template_directory_uri() . '/src/js/bootstrap.js', array('jquery'), '', true);

    wp_enqueue_script('romb-z-fancybox', get_template_directory_uri() . '/src/js/z-fancybox.js', array('jquery'), '', true);
    wp_enqueue_script('romb-lazybg', get_template_directory_uri() . '/src/js/lazybg.js', array('jquery'), '', true);
    wp_enqueue_script('romb-cubic', get_template_directory_uri() . '/src/js/z-cubic.js', array('jquery'), '', true);
}

add_action('wp_enqueue_scripts', 'emsi_custom_scripts');

function registerCustomThemeSettingsPage() {
    if (function_exists('acf_add_options_page')) {

        add_image_size('foundation-small', 640, 9999);
        add_image_size('foundation-medium', 1024, 9999);
        add_image_size('foundation-large', 1440, 9999);
        add_image_size('foundation-x-large', 1920, 9999);
        add_image_size('foundation-gallery-thumb', 350, 350, true);

        //Stworzenie głównego katalogu w kokpicie
        acf_add_options_page(array(
            'page_title' => 'Ustawienia strony',
            'menu_title' => 'Ustawienia strony',
            'menu_slug' => 'ustawienia_strony',
            'capability' => 'edit_posts',
            'parent_slug' => '',
            'position' => 10,
            'icon_url' => false,
            'redirect' => false,
        ));
    }
}

add_action('init', 'registerCustomThemeSettingsPage');