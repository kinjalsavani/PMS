
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6145,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_enter}","click",function(sym,e){window.open("farm_app.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_enter}","touchstart",function(sym,e){window.open("farm_app.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'login1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_login}","mouseover",function(sym,e){sym.$("login2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_login2}","mouseout",function(sym,e){sym.$("login2").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_login2}","click",function(sym,e){sym.$("login3").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_login}","click",function(sym,e){sym.play(4000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_login}","touchstart",function(sym,e){sym.play(4000);});
//Edge binding end
})("login1");
//Edge symbol end:'login1'

//=========================================================

//Edge symbol: 'signup1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_ffsd}","mouseover",function(sym,e){sym.$("sign-up2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sign-up2}","mouseout",function(sym,e){sym.$("sign-up2").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sign-up2}","click",function(sym,e){sym.$("sign-up-press").show();});
//Edge binding end
})("signup1");
//Edge symbol end:'signup1'

//=========================================================

//=========================================================

//Edge symbol: '_EF_Base_Adobe_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.play('active');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BaseCopy}","mouseover",function(sym,e){sym.play('active');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BaseCopy}","mouseout",function(sym,e){sym.play('inactive');});
//Edge binding end
})("_EF_BaseT_Adobe");
//Edge symbol end:'_EF_BaseT_Adobe'

//=========================================================

//Edge symbol: 'EF_Textbox_Adobe'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var ele=sym.getSymbolElement();var title=ele.attr("title");var spc=$('#'+ele.attr("id")+'__EF_SpaceT')
spc.html("<textarea form='efform' id='"+title+"' name='"+title+"'></textarea>");$("<style type='text/css'> .ef_tbox { padding-left: 6px; padding-right: 6px; color: rgb(192,192,192); background-color: rgba(0,0,0,0); border: none; height: 100%; outline: none; } #.ef_tbox:focus { border: none; } </style>").appendTo("head");$('#'+title).addClass("ef_tbox");$('#'+title).css('width',spc.width()-12);var base=sym.getSymbol('_EF_BaseT_Adobe');$('#'+title).mouseenter(function(){base.play('active')});$('#'+title).mouseleave(function(){base.play('inactive')});});
//Edge binding end
})("EF_Textbox_Adobe");
//Edge symbol end:'EF_Textbox_Adobe'

//=========================================================

//Edge symbol: '_EF_BaseB_Adobe'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${__EF_BaseB_Adobe}","click",function(sym,e){p=sym.getSymbolElement().parent();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.play('active');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",124,function(sym,e){sym.stop();});
//Edge binding end
})("_EF_BaseB_Adobe");
//Edge symbol end:'_EF_BaseB_Adobe'

//=========================================================

//Edge symbol: '_EF_BaseR_Adobe'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.play('active');});
//Edge binding end
})("_EF_BaseR_Adobe");
//Edge symbol end:'_EF_BaseR_Adobe'

//=========================================================

//Edge symbol: 'EF_Checkbox_Adobe'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var title=sym.getSymbolElement().attr("title");ele=sym.getSymbolElement();ele.append("<input form='efform' id='"+title+"' name='"+title+"' type='hidden' value='off' />");ele.click(function(){if(sym.getPosition()>0){sym.play('turn_off');$('#'+title).val("off");}else{sym.play('turn_on');$('#'+title).val("on");}});var shad=sym.getSymbol("_EF_ShadowC_Adobe");sele=shad.getSymbolElement();ele.mouseenter(function(){shad.play('active');});ele.mouseleave(function(){shad.play('inactive');});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop('turn_on');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
})("EF_Checkbox_Adobe");
//Edge symbol end:'EF_Checkbox_Adobe'

//=========================================================

//Edge symbol: 'EF_Input_Adobe_1'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var ele=sym.getSymbolElement();var title=ele.attr("title");var spc=$('#'+ele.attr("id")+'__EF_SpaceI')
spc.html("<input form='efform' type='password' id='"+title+"' name='"+title+"' />");$("<style type='text/css'> .ef_input { padding-left: 6px; padding-right: 6px; color: rgb(192,192,192); background-color: rgba(0,0,0,0); border: none; height: 100%; outline: none; } #.ef_input:focus { border: none; } </style>").appendTo("head");$('#'+title).addClass("ef_input");$('#'+title).css('width',spc.width()-12);var base=sym.getSymbol('_EF_Base_AdobeI');$('#'+title).mouseenter(function(){base.play('active')});$('#'+title).mouseleave(function(){base.play('inactive')});});
//Edge binding end
})("EF_Password_Adobe");
//Edge symbol end:'EF_Password_Adobe'

//=========================================================

//Edge symbol: 'EF_Radio_Adobe'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var ele=sym.getSymbolElement();var pairs=ele.attr("title").split("-");var title=pairs[0];var mkr=sym.getSymbol('_EF_Marker_Adobe');mkr.setVariable("optval",pairs[1]);var mkre=mkr.getSymbolElement();if($('#'+title).length<=0)
ele.append("<input form='efform' id='"+title+"' name='"+title+"' type='hidden' value='' />");var base=sym.getSymbol('_EF_BaseR_Adobe');mkre.mouseenter(function(){base.play('active')});mkre.mouseleave(function(){base.play('inactive')});mkre.click(function(){children=sym.getComposition().getStage().getChildSymbols();for(var i=0;i<children.length;i++)
{if(children[i].getSymbolElement().attr("title").split("-")[0]==title)
if(children[i].getSymbol('_EF_Marker_Adobe').getPosition()>0)
children[i].getSymbol('_EF_Marker_Adobe').playReverse('on');}
mkr.play('off');$('#'+title).val(mkr.getVariable("optval"));});});
//Edge binding end
})("EF_Radio_Adobe");
//Edge symbol end:'EF_Radio_Adobe'

//=========================================================

//Edge symbol: '_EF_Base_Adobe'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_BaseCopy}","mouseover",function(sym,e){sym.play('active');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_BaseCopy}","mouseout",function(sym,e){sym.play('inactive');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.play('active');});
//Edge binding end
})("_EF_Base_Adobe");
//Edge symbol end:'_EF_Base_Adobe'

//=========================================================

//Edge symbol: '_EF_Marker_Adobe'
(function(symbolName){})("_EF_Marker_Adobe");
//Edge symbol end:'_EF_Marker_Adobe'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${__EF_ShadowB_Adobe}","click",function(sym,e){p=sym.getSymbolElement().parent();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var title=sym.getSymbolElement().attr("title");sym.$("_EF_ButtonLabel").html(title);sym.$("_EF_ButtonLabel").prepend("<form id='efform' method='get' action='index.html'></form>");var base=sym.getSymbol("_EF_BaseB_Adobe");var sele=sym.$("_EF_ButtonLabel");sele.mouseenter(function(){base.play('active');});sele.mouseleave(function(){base.play('inactive');});sele.click(function(){$("#efform").submit();});});
//Edge binding end
})("EF_Button_Adobe");
//Edge symbol end:'EF_Button_Adobe'

//=========================================================

//Edge symbol: '_EF_Base_Adobe_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.play('active');});
//Edge binding end
})("_EF_ShadowC_Adobe");
//Edge symbol end:'_EF_ShadowC_Adobe'

//=========================================================

//Edge symbol: 'EF_Input_Adobe'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var ele=sym.getSymbolElement();var title=ele.attr("title");var spc=$('#'+ele.attr("id")+'__EF_SpaceI')
spc.html("<input form='efform' id='"+title+"' name='"+title+"' />");$("<style type='text/css'> .ef_input { padding-left: 6px; padding-right: 6px; color: rgb(192,192,192); background-color: rgba(0,0,0,0); border: none; height: 100%; outline: none; } #.ef_input:focus { border: none; } </style>").appendTo("head");$('#'+title).addClass("ef_input");$('#'+title).css('width',spc.width()-12);var base=sym.getSymbol('_EF_Base_AdobeI');$('#'+title).mouseenter(function(){base.play('active')});$('#'+title).mouseleave(function(){base.play('inactive')});});
//Edge binding end
})("EF_Input_Adobe");
//Edge symbol end:'EF_Input_Adobe'

//=========================================================

//Edge symbol: 'back'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_back}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("back");
//Edge symbol end:'back'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'
})(jQuery,AdobeEdge,"EDGE-16859898");