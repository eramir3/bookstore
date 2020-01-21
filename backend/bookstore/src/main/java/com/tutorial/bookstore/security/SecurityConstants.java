package com.tutorial.bookstore.security;

public class SecurityConstants {

    public static final String PUBLIC_MATCHERS = "/**"; // "/api/users/**";
	
	
	//public static final String[] PUBLIC_MATCHERS = {
	//		"/",
    //        "/favicon.ico",
    //        "/**/*.png",
    //        "/**/*.gif",
    //        "/**/*.svg",
    //        "/**/*.jpg",
    //        "/**/*.html",
    //        "/**/*.css",
    //        "/**/*.js",
	//		"/api/users/register",
	//		"/api/users/login"
	//};
	
	
    public static final String H2_URL = "h2-console/**";
    
    public static final String SECRET ="SecretKeyToGenJWTs";
    
    public static final String TOKEN_PREFIX= "Bearer ";
    
    public static final String HEADER_STRING = "Authorization";
    
    public static final long EXPIRATION_TIME = 300_000; //30 seconds
}
