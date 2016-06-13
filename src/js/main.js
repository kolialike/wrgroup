jQuery(function($){
	// tabs
	var tabs = $(".tabs").find("a");
	  var tabsContent = $(".tabs-content");
	  tabs.on('click', function(event) {
	    event.preventDefault();
	    $(this).addClass('active').siblings().removeClass('active');
	    var index = tabs.index($(this));
	    tabsContent.eq(index).addClass('active').siblings().removeClass('active');    
	  });

	var companyServicesSelect = $("#company-services-select");
	companyServicesSelect.on('change', function (event) {
		var optVal = $(this).val();
		$("#company-services-select-"+optVal).addClass('open').siblings().removeClass('open');
	});

	// language
	var languageRu = $(".language-ru");
	var language = $(".language")
	languageRu.on('click', function(event) {
		if (event.target.className == "language-ru") {
	      language.toggleClass('language-open');
	      event.preventDefault();
	    };
	});

	 $('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
       $('body').animate( { scrollTop: destination }, 500 );
     return false;
   });
});
