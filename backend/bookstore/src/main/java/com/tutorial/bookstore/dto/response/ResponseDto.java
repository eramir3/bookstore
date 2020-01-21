package com.tutorial.bookstore.dto.response;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class ResponseDto {

	private Object response;
	
	private String message;
	
	private int status;
	
	//@JsonIgnore
	//private HttpStatus httpStatus;

	public ResponseDto(Object response, HttpStatus httpStatus) {
		this.response = response;
		this.message = httpStatus.getReasonPhrase();
		this.status = httpStatus.value();
		//this.httpStatus = httpStatus;
	}


	public Object getResponse() {
		return response;
	}

	public void setResponse(Object response) {
		this.response = response;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	
	/*
	public HttpStatus getHttpStatus() {
		return httpStatus;
	}

	public void setHttpStatus(HttpStatus httpStatus) {
		this.httpStatus = httpStatus;
	}
	*/
}
