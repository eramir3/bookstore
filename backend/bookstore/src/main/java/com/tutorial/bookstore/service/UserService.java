package com.tutorial.bookstore.service;


import com.tutorial.bookstore.domain.User;

public interface UserService {

	User save(User user);
	
	User findByUsername(String name);
}
