package com.cit.mfe1;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.cit.core.Manifest;
import com.cit.core.ManifestProvider;

@Component
public class Mfe1ManifestProvider implements ManifestProvider {

	@Override
	public String getName() {
		return "mfe1";
	}

	@Override
	public List<String> getNames() {
		return List.of("mfe1");
	}

	@Override
	public Map<String, Manifest> getManifests() {
		return Map.of(
				"orders",
				new Manifest(
						"http://localhost:8080/ng-shell/mfe1/remoteEntry.js",
						"./orders",
						"Orders",
						"orders",
						"ordersRoutes",
						"OrdersModule",
						"module"
						),
				"plans",
				new Manifest(
						"http://localhost:8080/ng-shell/mfe1/remoteEntry.js",
						"./plans",
						"Plans",
						"plans",
						"plansRoutes",
						"PlansModule",
						"module"
						)
				);
	}

}
