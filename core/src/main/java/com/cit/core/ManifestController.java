package com.cit.core;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/me/manifests")
public class ManifestController {

	@Autowired
	private ManifestControllerHelper manifestControllerHelper;

	@GetMapping
	public List<String> getCurrentUserManifests() {
		return List.of(manifestControllerHelper.getManifests());
	}

	@GetMapping("/list")
	public List<String> getCurrentUserManifestsList() {
		return List.of(manifestControllerHelper.getManifestsList());
	}

	@GetMapping("/all")
	public Map<String, Manifest> getAllManifests() {
		return manifestControllerHelper.getAllManifests();
	}

}
