package com.example.groupproject.jwt.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;

import java.io.Serializable;

@Getter
@AllArgsConstructor
public class JwtResponseDTO implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private String jwttoken = "";
    public JwtResponseDTO(String token, UserResponseDTO userResponseDTO) {
		this.jwttoken= token;
		this.user = userResponseDTO;
	}
	public String getJwttoken() {
		return jwttoken;
	}
	public UserResponseDTO getUser() {
		return user;
	}
	private UserResponseDTO user = new UserResponseDTO();
}
