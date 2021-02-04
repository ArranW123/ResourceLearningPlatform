package com.example.groupproject.repository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder {

	public static void main(String[] args) {
		BCryptPasswordEncoder encode = new BCryptPasswordEncoder();
		String rawPass = "sagar2021";
		String encodedPass = encode.encode(rawPass);
		
		System.out.println(encodedPass);
	}

}
