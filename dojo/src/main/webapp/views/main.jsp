<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>首页</title>
<link rel="stylesheet" href="css/common.css" media="screen">
<link rel="stylesheet" href="css/main.css" media="screen">
<link rel="stylesheet"
	href="js/dojo-release-1.9.1/dojo/resources/dojo.css" media="screen">
<link rel="stylesheet"
	href="js/dojo-release-1.9.1/dijit/themes/claro/claro.css"
	media="screen">

<!-- load dojo   dojox/layout/ContentPane -->
<script src="js/dojo-release-1.9.1/dojo/dojo.js"></script>
<script>
	require(
			[ "dojo/parser", "dijit/registry", "dijit/layout/BorderContainer",
					"dijit/layout/TabContainer", "dijit/layout/ContentPane",
					"dojox/layout/ContentPane", "dojo/domReady!" ],
			function(parser, registry) {
				parser.parse();
				var centerPane = registry.byId("centerPanel");
				centerPane
						.setContent("<iframe id='ibody' src='toContent.do?contentUrl=dataPages/preface' style='width: 100%; height: 100%; border: none' />");
			});
</script>

</head>
<body class="claro">

	<div style="height: 100%" data-dojo-type="dijit/layout/BorderContainer"
		data-dojo-props="design: 'headline'">


		<div
			style="text-align: center; background-color: #d0e9fc; height: 30px; font-size: 20px; font-weight: bold;"
			data-dojo-type="dijit/layout/ContentPane"
			data-dojo-props="region: 'top'">首页</div>

		<div style="width: 100%; height: 100%; text-align: center;"
			data-dojo-type="dijit/layout/BorderContainer"
			data-dojo-props="region: 'center', splitter: true ,design: 'headline'">

			<div style="width: 200px; height: 100%; text-align: center;"
				data-dojo-type="dijit/layout/BorderContainer"
				data-dojo-props="region: 'left', splitter: true ,design: 'headline'">

				<div id="title" data-dojo-type="dijit/layout/ContentPane"
					data-dojo-props="region: 'top'">
					<a href="javascript: expandAll(null,null);">全部展开</a> | <a
						href="javascript: collapseAll(null,null);">全部收缩</a>
				</div>
				<div data-dojo-type="dijit/layout/ContentPane"
					data-dojo-props="region: 'center'">
					<div style="height: 100%; width: 100%; background-color: #d0e9fc">1212</div>
					<!-- 									<div dojoType="dijit.Tree" id="navTree" model="continentModel" -->
					<!-- 										showRoot="true" persist="false" autoExpand="true" -->
					<!-- 										openOnDblClick="true"> -->
					<!-- 										<script type="dojo/method" event="onClick" args="item"> -->
					<!-- 										dojo.byId("ibody").src = item.url; -->
					<!-- 				            </script>  -->
					<!-- 									</div> -->
				</div>


			</div>

			<div id="centerPanel" data-dojo-type="dojox/layout/ContentPane"
				data-dojo-props="region: 'center'"
				style="background-color: #d0e9fc;">
				<!-- 				<iframe id="ibody" src="toContent.do?contentUrl=dataPages/preface" -->
				<!-- 				 	style="width: 200px; height: 200px; border: none" /> -->

			</div>
		</div>


	</div>

</body>
</html>