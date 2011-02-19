/**
 * Random Ajax Slider
 *
 * Description: Creates a slider out of a list of <li> elements, randomizes them, and ajax loads them based on how likely they are to appear in the viewport.
 *
 * Usage: 
 *
 *	$('#gallery').randomSlider({
 *		'randomize'	: 'true'
 *	});
 *
 * Defaults:
 *
 *		'randomize'	: 'true'
 *
 *
 * Dual licensed under MIT and GNU General Public License version 3 (GPLv3)
 * http://www.opensource.org/licenses
 * Launch  : October 2010
 */
(function($) {
	$.fn.exists = function(){if(jQuery(this).length == 0){return false;}else{return true;}};
	$.fn.ras = function(options) {

		var defaults = {
		
			'randomize'	: 'true'
		
		};
		
		return this.each(function() {
			//Stuff
		});
	}

})(jQuery);