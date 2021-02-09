package com.example.groupproject.controller;

import com.example.groupproject.model.Student;
import com.example.groupproject.repository.StudentRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

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
    	
    	BCryptPasswordEncoder encode = new BCryptPasswordEncoder();
    	String encodedPass = encode.encode(student.getPassword());
    	student.setPassword(encodedPass);
    	
        repo.save(student);
        return "register_success";

    }
    
    @GetMapping("/list_users")
    public String viewUserLists(Model model) {
    	
    	List<Student> listUsers = repo.findAll();
    	
    	model.addAttribute("listUsers", listUsers);
    	
    	return "users_lists";
    }
   
}
