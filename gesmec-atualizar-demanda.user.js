// ==UserScript==
// @name       Gesmec - Atualizar Demanda
// @namespace  http://www.mec.gov.br/
// @version    0.2
// @description
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @require     http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js
// @match 		http://operacoesti.mec.gov.br*/CAisd/pdmweb.exe?SID=*+FID=*+OP=SHOW_DETAIL+FACTORY=*
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @copyright  2013+, You
// ==/UserScript==

//Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);

function refreshBugPage(){
	document.location.reload();
}

var refreshButton=document.createElement("input");
refreshButton.type="button";
refreshButton.value="Atualizar";
refreshButton.onclick = refreshBugPage;

 
$(document).ready(function()
		{
		    $('.tablecenter tbody', $("frame[name='product']").contentDocument).append($('<tr><td>').append($(refreshButton)));
		});
