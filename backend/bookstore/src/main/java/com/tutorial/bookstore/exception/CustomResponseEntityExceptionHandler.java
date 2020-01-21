package com.tutorial.bookstore.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.tutorial.bookstore.dto.response.ResponseDto;
import com.tutorial.bookstore.dto.response.failure.UsernameAlreadyExistsResponseDto;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	/*
    @ExceptionHandler
    public final ResponseEntity<Object> handleProjectIdException(ProjectIdException ex, WebRequest request){
        ProjectIdExceptionResponse exceptionResponse = new ProjectIdExceptionResponse(ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public final ResponseEntity<Object> handleProjectNotFoundException(ProjectNotFoundException ex, WebRequest request){
        ProjectNotFoundExceptionResponse exceptionResponse = new ProjectNotFoundExceptionResponse(ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
	*/

	/*
    @ExceptionHandler
    public final ResponseEntity<Object> handleUsernameAlreadyExists(UsernameAlreadyExistsException ex, WebRequest request){
        UsernameAlreadyExistsResponse exceptionResponse = new UsernameAlreadyExistsResponse(ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
	 */
	
	@ExceptionHandler
    public final ResponseEntity<ResponseDto> handleUsernameAlreadyExists(UsernameAlreadyExistsException ex, WebRequest request){
        UsernameAlreadyExistsResponseDto exceptionResponse = new UsernameAlreadyExistsResponseDto(ex.getMessage());
		ResponseDto response = new ResponseDto(exceptionResponse, HttpStatus.BAD_REQUEST);
        return new ResponseEntity<ResponseDto>(response, HttpStatus.BAD_REQUEST);
    }
	
	/*
	@ExceptionHandler
    public final ResponseEntity<ResponseDto> handleUsernameAlreadyExists(AuthenticationException ex, WebRequest request){
        AuthenticationException exceptionResponse = new UsernameAlreadyExistsResponse(null);
		ResponseDto response = new ResponseDto(exceptionResponse, HttpStatus.BAD_REQUEST);
        return new ResponseEntity<ResponseDto>(response, HttpStatus.BAD_REQUEST);
    }
	*/
}
