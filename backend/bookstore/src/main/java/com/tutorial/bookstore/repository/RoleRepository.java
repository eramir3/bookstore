package com.tutorial.bookstore.repository;

import org.springframework.data.repository.CrudRepository;

import com.tutorial.bookstore.domain.security.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {

}
