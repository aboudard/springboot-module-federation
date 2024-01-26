package com.cit.mfe1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Service;

import com.cit.mfe1.controllers.Mfe1Controller;

@Service
@EnableConfigurationProperties(ServiceProperties.class)
public class Mfe1Service {

	private final ServiceProperties serviceProperties;

	public Mfe1Service(ServiceProperties serviceProperties) {
		this.serviceProperties = serviceProperties;
	}

	public String message() {
		return this.serviceProperties.getMessage();
	}

	public List<Order> getOrders() {
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