package com.cit.mfe1.controllers;

import java.util.ArrayList;
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
	public List<Order> orders() {
		ArrayList<Order> list = new ArrayList<Order>();
		list.add(new Order("1", "Order 1", "Order 1 description"));
		list.add(new Order("2", "Order 2", "Order 2 description"));

		return list;
	}

	public static class Order {
		private String id;
		private String name;
		private String description;

		public Order(String id, String name, String description) {
			this.id = id;
			this.name = name;
			this.description = description;
		}

		public String getId() {
			return id;
		}

		public String getName() {
			return name;
		}

		public String getDescription() {
			return description;
		}
	}

}
