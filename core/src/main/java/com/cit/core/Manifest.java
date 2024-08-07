package com.cit.core;

public class Manifest {
	private String remoteEntry;
	private String exposedModule;
	private String displayName;
	private String routePath;
	private String routes;
	private String ngModuleName; //  TODO find a more generic name for next versions with routes
	private String type;

	public Manifest(
			String remoteEntry,
			String exposedModule,
			String displayName,
			String routePath,
			String routes,
			String ngModuleName,
			String type) {
		this.remoteEntry = remoteEntry;
		this.exposedModule = exposedModule;
		this.displayName = displayName;
		this.routePath = routePath;
		this.routes = routes;
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

	public String getRoutes() {
		return routes;
	}

	public void setRoutes(String routes) {
		this.routes = routes;
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
