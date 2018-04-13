this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["index"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"task-row\">\n      <div class=\"priority "
    + alias4(((helper = (helper = helpers.priority || (depth0 != null ? depth0.priority : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"priority","hash":{},"data":data}) : helper)))
    + "\">\n        <a tooltip=\"Task priority\" class=\"tooltip\">"
    + alias4(((helper = (helper = helpers.priority || (depth0 != null ? depth0.priority : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"priority","hash":{},"data":data}) : helper)))
    + "</a>\n      </div>\n      <div class=\"task-title\">\n        <h4>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n        <h5>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</h5>\n      </div>\n      <div class=\"task-status\">\n        <div class=\"status-bar\">\n          <div class=\"status-track\">\n            <span class=\"status-text\">"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n            <div class=\"status-fill\" style=\"width:"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"task-time\"><a  tooltip=\"Time remaining ( total / used )\" class=\"tooltip\">"
    + alias4(((helper = (helper = helpers.calcRemaining || (depth0 != null ? depth0.calcRemaining : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"calcRemaining","hash":{},"data":data}) : helper)))
    + " <small>( "
    + alias4(((helper = (helper = helpers.timeUsed || (depth0 != null ? depth0.timeUsed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timeUsed","hash":{},"data":data}) : helper)))
    + " / "
    + alias4(((helper = (helper = helpers.timeTotal || (depth0 != null ? depth0.timeTotal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timeTotal","hash":{},"data":data}) : helper)))
    + " )</small></a></div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<!-- Template -->\n<script id=\"some-template\" type=\"text/x-handlebars-template\">\n<div class=\"block-container\">\n  <div class=\"block-header\">\n    <h3>Tasks</h3>\n  </div>\n  <div class=\"block-content\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tasks : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n</script> <!-- end template -->\n\n\n\n<!-- Output --> \n<div id=\"content-placeholder\"></div>";
},"useData":true});