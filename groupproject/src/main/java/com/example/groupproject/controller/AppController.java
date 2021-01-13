package com.example.groupproject.controller;

import com.example.groupproject.model.Student;
import com.example.groupproject.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

//Need help trying to get this application to run the index file, just to test the controller file. 

@Controller
public class AppController {
    @Autowired
    private StudentRepository repo;

    @GetMapping("")
    public String viewHomePage(){
        return "home.html";
    }

    @GetMapping("/register")
    public String showSignUpForm(Model model){
        model.addAttribute("student", new Student());
        return "signup_form"; 
    }
    @PostMapping("/process_register")
    public String processRegistration(Student student){
        repo.save(student);
        return "register_success";

    }
}
