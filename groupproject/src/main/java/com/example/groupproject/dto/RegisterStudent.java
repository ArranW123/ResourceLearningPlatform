package com.example.groupproject.dto;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

public class RegisterStudent {

    @Column(nullable = false)
    @NotNull(message = "Email is neccessary")
    String email;
    @Column(nullable = false)
    @NotNull(message = "Password is neccessary")
    String password;
    @Column(nullable = false)
    @NotNull(message = "FirstName is neccessary")
    String firstName;
    @Column(nullable = false)
    @NotNull(message = "LastName is neccessary")
    String lastName;

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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


}
