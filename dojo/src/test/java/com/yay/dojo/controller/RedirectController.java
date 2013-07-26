package com.yay.dojo.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class RedirectController {
	private final Logger logger = Logger.getLogger(RedirectController.class);

	@RequestMapping("main.do")
	public ModelAndView redirectToMain (
			@RequestParam(value="toPageUrl",required=false)String toPageUrl) {
		
		logger.info("进入main.do");
		ModelMap map = new ModelMap();
		
		map.put("toPageUrl", toPageUrl == null ? "" : toPageUrl);
		
		return new ModelAndView("main", map);
	}
	
	@RequestMapping("toContent.do")
	public ModelAndView redirectToContent (
			@RequestParam("contentUrl")String contentUrl) {
		
		ModelMap map = new ModelMap();
		
		return new ModelAndView(contentUrl, map);
	}
	
	
	
}
