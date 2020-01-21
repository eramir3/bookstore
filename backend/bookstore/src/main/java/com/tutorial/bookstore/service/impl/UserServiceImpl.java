package com.tutorial.bookstore.service.impl;

import java.util.HashSet;
import java.util.Set;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.tutorial.bookstore.domain.User;
import com.tutorial.bookstore.domain.security.Role;
import com.tutorial.bookstore.domain.security.UserRole;
import com.tutorial.bookstore.repository.RoleRepository;
import com.tutorial.bookstore.repository.UserRepository;
import com.tutorial.bookstore.service.UserService;

import com.tutorial.bookstore.exception.UsernameAlreadyExistsException;

@Service
public class UserServiceImpl implements UserService {

	private static final Logger LOG = LoggerFactory.getLogger(UserService.class);
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	//@Transactional
	public User save(User user) {
		
		try{
			
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            user.setUsername(user.getUsername());
            
            if(user.getId() == null) {
            	
            	Role role = new Role();
        		role.setRoleId(1);
        		role.setName("ROLE_USER");
        		Set<UserRole> userRoles = new HashSet<>();
        		userRoles.add(new UserRole(user, role));
                
                
                for(UserRole ur : userRoles) {
    				roleRepository.save(ur.getRole());
    			}
    			
    			user.getUserRoles().addAll(userRoles);
            }
        
            return userRepository.save(user);

        }
		catch (Exception e){
            throw new UsernameAlreadyExistsException("Username '"+user.getUsername()+"' already exists");
        }
		
	}

	public User findByUsername(String name) {
		return userRepository.findByUsername(name);
	}
	
}
