$(document).ready(function(){
   // Adds third page to menu
	$("[href='page-2']").after('<a class="menu-item" href="page-3">Third page</a>');

	// Removes border on menu items
   $('.menu-item').css('border', 'none');

   // Sets newDate variable
   var d = new Date();
   var newDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
   console.log(newDate);
   // Repopulates contents of the date span element with the current date
   $('#date').html(newDate);

   // Gets contents of the right-col div from the html file
   $('#right-col').load('right-col.html');

});
