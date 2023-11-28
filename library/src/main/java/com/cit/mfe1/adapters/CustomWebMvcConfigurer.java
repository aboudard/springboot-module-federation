package com.cit.mfe1.adapters;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@PropertySource("classpath:mfe1.properties")
public class CustomWebMvcConfigurer implements WebMvcConfigurer {

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/mfe1").setViewName("redirect:/mfe1/");
		registry.addViewController("/mfe1/").setViewName("forward:/mfe1/index.html");
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/mfe1/**")
				.addResourceLocations("/public-mfe1", "classpath:/public-mfe1/");
	}

}
