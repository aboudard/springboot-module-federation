package com.cit.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication(scanBasePackages = "com.cit")
@RestController
public class ShellApplication {
	public static void main(String[] args) {
		SpringApplication.run(ShellApplication.class, args);
	}
}
