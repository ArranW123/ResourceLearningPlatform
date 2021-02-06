package com.example.groupproject.dto;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

public class LoginStudent {

    @Column(nullable = false)
    @NotNull(message = "Email is neccessary")
    String email;
    @Column(nullable = false)
    @NotNull(message = "Password is neccessary")
    String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
