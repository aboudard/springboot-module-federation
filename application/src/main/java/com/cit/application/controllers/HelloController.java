package com.cit.application.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class HelloController {

	@Value("${mf.manifest.remoteEntry}")
	private String remoteEntry;

	@Value("${mf.manifest.exposedModule}")
	private String exposedModule;

	@Value("${mf.manifest.displayName}")
	private String displayName;

	@Value("${mf.manifest.routePath}")
	private String routePath;

	@Value("${mf.manifest.ngModuleName}")
	private String ngModuleName;

	@Value("${mf.manifest.type}")
	private String type;

	@GetMapping("/api/hello")
	public String index() {
		return "Greetings from Spring Boot!";
	}

	@GetMapping("/api/manifest")
	public MicroFrontend microfontend() {
		Manifest mfe1 = new Manifest(remoteEntry, exposedModule, displayName, routePath, ngModuleName, type);
		return new MicroFrontend(mfe1);
	}

	public static class MicroFrontend {
		private Manifest mfe1;

		public MicroFrontend(Manifest mfe1) {
			this.mfe1 = mfe1;
		}

		public Manifest getMfe1() {
			return mfe1;
		}
		public void setMfe1(Manifest mfe1) {
			this.mfe1 = mfe1;
		}
	}

	public static class Manifest {

		private String remoteEntry;
		private String exposedModule;
		private String displayName;
		private String routePath;
		private String ngModuleName;
		private String type;

		public Manifest(
				String remoteEntry,
				String exposedModule,
				String displayName,
				String routePath,
				String ngModuleName,
				String type) {
			this.remoteEntry = remoteEntry;
			this.exposedModule = exposedModule;
			this.displayName = displayName;
			this.routePath = routePath;
			this.ngModuleName = ngModuleName;
			this.type = type;
		}

		public String getRemoteEntry() {
			return remoteEntry;
		}
		public void setRemoteEntry(String remoteEntry) {
			this.remoteEntry = remoteEntry;
		}
		public String getExposedModule() {
			return exposedModule;
		}
		public void setExposedModule(String exposedModule) {
			this.exposedModule = exposedModule;
		}
		public String getDisplayName() {
			return displayName;
		}
		public void setDisplayName(String displayName) {
			this.displayName = displayName;
		}
		public String getRoutePath() {
			return routePath;
		}
		public void setRoutePath(String routePath) {
			this.routePath = routePath;
		}
		public String getNgModuleName() {
			return ngModuleName;
		}
		public void setNgModuleName(String ngModuleName) {
			this.ngModuleName = ngModuleName;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}

	}

}
