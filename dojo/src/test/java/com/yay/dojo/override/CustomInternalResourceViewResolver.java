package com.yay.dojo.override;

import org.springframework.web.servlet.view.AbstractUrlBasedView;
import org.springframework.web.servlet.view.InternalResourceView;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

public class CustomInternalResourceViewResolver extends
		InternalResourceViewResolver {
	@Override
	protected AbstractUrlBasedView buildView(String viewName) throws Exception {
		InternalResourceView view = (InternalResourceView) super.buildView(viewName);
		
		String[] suffixes = getSuffix().split(";");
		for (String string : suffixes) {
			System.out.println(string);
		}
		
		
		view.setUrl((new StringBuilder()).append(getPrefix()).append(viewName).append(getSuffix()).toString());
		
        return view;
	}
	

}
