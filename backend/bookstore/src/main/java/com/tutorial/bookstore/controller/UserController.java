package com.tutorial.bookstore.controller;

import static com.tutorial.bookstore.security.SecurityConstants.TOKEN_PREFIX;

import java.security.Principal;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tutorial.bookstore.domain.User;
import com.tutorial.bookstore.domain.security.Role;
import com.tutorial.bookstore.domain.security.UserRole;
import com.tutorial.bookstore.dto.request.LoginRequestDto;
import com.tutorial.bookstore.dto.response.ResponseDto;
import com.tutorial.bookstore.dto.response.success.LoginResponseDto;
import com.tutorial.bookstore.mapper.MapValidationErrorService;
import com.tutorial.bookstore.security.JwtTokenProvider;
import com.tutorial.bookstore.service.impl.UserServiceImpl;
import com.tutorial.bookstore.validator.UserValidator;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;



    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequestDto loginRequest, BindingResult result, HttpServletResponse httpServletResponse){
    	
    	ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        
		if(errorMap!=null) 
        	return errorMap;

        
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX +  tokenProvider.generateToken(authentication);

        LoginResponseDto success = new LoginResponseDto(jwt);
        
        return new ResponseEntity<LoginResponseDto>(success, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result){
    	
    	// Validate passwords match
        //userValidator.validate(user,result);
    	
    	ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        
		if(errorMap!=null) 
        	return errorMap;

        User newUser = userService.save(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }
    
    @PatchMapping("/update")
    public ResponseEntity<?> updateUser(@Valid @RequestBody User user, BindingResult result){
    	
    	// Validate passwords match
        //userValidator.validate(user,result);
    	
    	ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        
		if(errorMap!=null) 
        	return errorMap;

        User updatedUser = userService.save(user);
        return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
    }
    
    // TODO agregar response entity cambiar a get
    @RequestMapping("/getCurrentUser")
	public User getCurrentUser(Principal principal) {
		User user = new User();
		if (null != principal) {
			user = userService.findByUsername(principal.getName());
		}

		return user;
	}
}
