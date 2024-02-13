package com.cit.core;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ManifestControllerHelper {

	private Map<String, ManifestProvider> manifestProviderMap = Collections.emptyMap();
	private Map<List<String>, ManifestProvider> manifestProviderListMap = Collections.emptyMap();
	private Map<Map<String, Manifest>, ManifestProvider> manifestProvidersListMap = Collections.emptyMap();


	@Autowired
	void initializeProviders(List<ManifestProvider> manifestProviderList) {
		manifestProvidersListMap = manifestProviderList
				.stream()
				.collect(Collectors.toMap(ManifestProvider::getManifests, Function.identity()));
	}

	@Autowired
	void initializeMap(List<ManifestProvider> manifestProviderList) {
		manifestProviderMap = manifestProviderList
				.stream()
				.collect(Collectors.toMap(ManifestProvider::getName, Function.identity()));
	}

	@Autowired
	void initializeListMap(List<ManifestProvider> manifestProviderList) {
		manifestProviderListMap = manifestProviderList
				.stream()
				.collect(Collectors.toMap(ManifestProvider::getNames, Function.identity()));
	}

	public Map<String, Manifest> getAllManifests() {
		return manifestProvidersListMap.keySet().stream().flatMap(map -> map.entrySet().stream())
				.collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
	}

	public String[] getManifests() {
		return manifestProviderMap.keySet().toArray(new String[0]);
	}

	public String[] getManifestsList() {
		return manifestProviderListMap.keySet().stream().flatMap(List::stream).toArray(String[]::new);
	}

}
