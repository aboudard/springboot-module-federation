package com.cit.mfe1.service;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("service")
public class ServiceProperties {
    /**
	 * A message for the service.
	 */
	private String message = "Hello Mfe 1";

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
