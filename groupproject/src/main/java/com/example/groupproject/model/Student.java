package com.example.groupproject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long StudentID;
    
    @Column(nullable = false, length = 20)
    private String StudentFirstName;
    
    @Column(nullable = false, length = 20)
    private String StudentLastName;
    
    @Column(nullable = false, unique = true, length = 45)
    private String StudentEmailAddress;

    @Column(nullable = false, length = 64)
    private String password;

    public Long getStudentID() {
        return StudentID;
    }

    public void setStudentID(Long studentID) {
        StudentID = studentID;
    }

    public String getStudentFirstName() {
        return StudentFirstName;
    }

    public void setStudentFirstName(String studentFirstName) {
        StudentFirstName = studentFirstName;
    }

    public String getStudentLastName() {
        return StudentLastName;
    }

    public void setStudentLastName(String studentLastName) {
        StudentLastName = studentLastName;
    }

    public String getStudentEmailAddress() {
        return StudentEmailAddress;
    }

    public void setStudentEmailAddress(String studentEmailAddress) {
        StudentEmailAddress = studentEmailAddress;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
}
