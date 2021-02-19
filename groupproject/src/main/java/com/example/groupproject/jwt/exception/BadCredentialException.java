package com.example.groupproject.jwt.exception;

public class BadCredentialException extends Exception {
    public BadCredentialException(String message) {
        super(message);
    }
}
