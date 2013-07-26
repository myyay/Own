package com.yay.dojo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {

	@RequestMapping(value="go.do",produces="text/plain;charset=UTF-8")
	public @ResponseBody String doSome (@RequestParam (value="h") String h) {
		
		return "哈哈" + h;
	}
	
	
}
