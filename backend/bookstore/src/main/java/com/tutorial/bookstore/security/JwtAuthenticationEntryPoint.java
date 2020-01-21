package com.tutorial.bookstore.security;

import com.google.gson.Gson;
import com.tutorial.bookstore.dto.response.ResponseDto;
import com.tutorial.bookstore.dto.response.failure.InvalidLoginResponseDto;
import com.tutorial.bookstore.mapper.MapValidationErrorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

	@Autowired
    private MapValidationErrorService responseDtoMapper;
	
    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
                         AuthenticationException e) throws IOException, ServletException {

        InvalidLoginResponseDto loginResponse = new InvalidLoginResponseDto();
                
        String jsonLoginResponse = new Gson().toJson(loginResponse);

        httpServletResponse.setContentType("application/json");
        httpServletResponse.setStatus(401);
        httpServletResponse.getWriter().print(jsonLoginResponse);
    }
}
