package com.pack.ofd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pack.ofd.model.Restaurant;
import com.pack.ofd.model.User;
import com.pack.ofd.repository.RestaurantRepository;

@RestController
public class RestaurantController {

	@Autowired
	private RestaurantRepository restaurantRepository;
	

//	@PostMapping("/register")
//	User newUser(@RequestBody User newUser) {
//		return userRepository.save(newUser);
//	}
	
	
//	@PostMapping("/resregister")
//	Restaurant newRestaurant(@RequestBody Restaurant newRestaurant) {
//		return RestaurantRepository.save(newRestaurant);
//	}
//	
//	@GetMapping
//	List<Restaurant> getAllUsers(){
//		return restaurantController.findAll();
//	}
}
