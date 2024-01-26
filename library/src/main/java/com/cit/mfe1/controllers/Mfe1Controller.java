package com.cit.mfe1.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cit.mfe1.service.Mfe1Service;

@RestController
public class Mfe1Controller {

	@Autowired
	private Mfe1Service mfe1Service;

	@GetMapping("/api/mfe1")
	public String index() {
		return mfe1Service.message();
	}

	@GetMapping("/api/orders")
	public List<Mfe1Service.Order> orders() {
		return mfe1Service.getOrders();
	}

}
