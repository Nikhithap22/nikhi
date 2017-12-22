sap.ui.define([
               "sap/ui/core/UIComponent",
],function(UIComponent){
	"use strict";
	return UIComponent.extend("sap.ui.odata.conn.demo.Component", {
		metadata : {
			manifest : "json"			
		},
		init : function(){
		
			//Call the init function of the Parent
			UIComponent.prototype.init.apply(this, arguments);
			
			// create the views based on the url/hash
			this.getRouter().initialize();
			
			
			var sServiceUrl = this.getMetadata().getManifest()["sap.app"].dataSources.mainService.uri;
			var cgiGoodsIssueModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
			sap.ui.getCore().setModel(cgiGoodsIssueModel, "cgiGoodsIssueModel");
			
		}
	});
});