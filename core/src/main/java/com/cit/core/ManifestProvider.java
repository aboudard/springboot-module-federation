package com.cit.core;

import java.util.List;
import java.util.Map;

public interface ManifestProvider {
	String getName();
	List<String> getNames();
	Map<String, Manifest> getManifests();
}
