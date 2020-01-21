package com.tutorial.bookstore.dto.response.failure;

import org.springframework.http.HttpStatus;

public class UsernameAlreadyExistsResponseDto {

    private String username;
    
    public UsernameAlreadyExistsResponseDto(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
