<?php
/*
Plugin Name: Profile Links
Version: 1.0
Plugin URI: http://toolstack.com/profile-links
Author: Greg Ross
Author URI: http://toolstack.com
Description: Adds links to each of the major sections of your profile at the top of the page.

Compatible with WordPress 3.5+.

Read the accompanying readme.txt file for instructions and documentation.

Copyright (c) 2014 by Greg Ross

This software is released under the GPL v2.0, see license.txt for details
*/

define( 'ProfileLinksVersion', '1.0' );

/*
	This function is called when a user edits/views their profile and creates the profile section links.
	
	$user = the user who's profile we're viewing
*/
Function ProfileLinksLoadProfile( $user )
	{
	wp_register_script( 'profilelinks_js', plugins_url( '', __FILE__ )  . '/profile-links.js' );
	wp_enqueue_script( 'profilelinks_js' );
	}
	
// Handle the user profile items
add_action( 'show_user_profile', 'ProfileLinksLoadProfile' );
add_action( 'edit_user_profile', 'ProfileLinksLoadProfile' );
?>