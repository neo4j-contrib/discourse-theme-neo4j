import { withPluginApi } from "discourse/lib/plugin-api";

function initialize(api) {
  // init via api here
  console.log("Initializing Neo4j Theme...")

  console.log("Loading tailwind from", settings.theme_uploads.tailwind)

		// Get HTML head element
		var assetStylesheets = document.getElementsByTagName('discourse-assets-stylesheets')[0];
		// Create new link Element
		var link = document.createElement('link');
		// set the attributes for link element
		link.rel = 'stylesheet';
		link.type = 'text/css';
	
		link.href = settings.theme_uploads.tailwind

		// Append link element to HTML head
		assetStylesheets.append(link);

		if (window.innerWidth > 800) {
			api.decorateWidget('header-icons:before', helper => {
		
				return helper.h('span', {
					style: "float:left; height:2.2857em; line-height:2.2857em; padding-right:30px; padding-top:.2143em;"
				}, [
					'NODES 2023 Is on October 26th, and You’re Invited! ',
					helper.h('a', {
						href:'https://dev.neo4j.com/3PWWB5a',
					}, 'Save your seat')
				]);
			});
		}

}

export default {
  name: "neo4j-theme-init",

  initialize() {
    withPluginApi("0.8.28", initialize);
  }
};