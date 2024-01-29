package com.cit.core;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class CoreManifestProvider implements ManifestProvider {

	@Override
	public String getName() {
		return "core";
	}

	@Override
	public List<String> getNames() {
		return List.of("users", "orders");
	}

	// fake data
	@Override
	public Map<String, Manifest> getManifests() {
		// empty
		return Map.of();
		/*return Map.of(
				"users",
				new Manifest(
						"http://localhost:8080/ng-shell/core/remoteEntry.js",
						"./users",
						"Users",
						"users",
						"UsersModule",
						"module"
						)
				);*/
	}

}
