package com.example.groupproject.jwt.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JWTDestroyDTO implements Serializable {

    private static final long serialVersionUID = 5926468583005150707L;

    private String message;

}