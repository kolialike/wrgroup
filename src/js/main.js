jQuery(function($){
	var companyServicesSelect = $("#company-services-select");
	companyServicesSelect.on('change', function () {
		console.log(event);
		// attr({});
		var optVal = companyServicesSelect.target("option").tagName.val();
		$('"company-services-select-"+optVal').addClass('open').siblings().removeClass('open');
	});
});
