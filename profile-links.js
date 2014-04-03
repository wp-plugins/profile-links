/*
	This is the main function called on the user profile load/edit.
*/
function ProfileLinks()
	{
	var OptionsList = '';
	
	// Find all the H3 tags in the profile, which should be the groupings for each option group.
	jQuery('#your-profile > h3').each( function( index ) {
		// Set the current H3 to work on and get it's id.
		var option = jQuery( this );
		var id = option.attr('id');
		
		// If no id has been defined for the H3 tag, create one.
		if( id == undefined ) { id = 'ProfileLink' + ( index + 1 ); option.attr( 'id', id ); }
		
		// If this isn't the first option, add a vertical separator to the list.
		if( index > 0 ) { OptionsList += ' | '; }
		
		// Add the current option to the list.
		OptionsList += '<a href="#' + id + '">' + option.text() + '</a>';
		
		// Add an anchor to the H3 tag  back to the top of the page.
		option.replaceWith( '<a href="#top" style="text-decoration: none;">' + document.getElementById(id).outerHTML + '</a>' );
	} );
	
	// Add an anchor to the top of the page so we can jump back to the top.
	jQuery('#profile-page').before( '<a name="top"></a>' );
	
	// Add the option list between the Profile title and the start of the options.
	jQuery('#your-profile').before( '<br>' + OptionsList + '<br><br>' );
	}
	
window.addEventListener ? window.addEventListener( "load", ProfileLinks, false ) : window.attachEvent && window.attachEvent( "onload", ProfileLinks );