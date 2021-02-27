package com.example.groupproject.controller;

import com.example.groupproject.model.Student;
import com.example.groupproject.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;



import java.util.Optional;

//Need help trying to get this application to run the index file, just to test the controller file. 

@Controller
public class AppController {
    @Autowired
    private StudentRepository repo;
    @GetMapping("/user")
    public String profile() {
        return "profile.html";
    }

    @GetMapping("")
    public String viewHomePage(){
        return "home.html";
    }

    @GetMapping("/")
    public String viewHome(){
        return "home.html";
    }

    @GetMapping("/register")
    public String showSignUpForm(Model model){
        model.addAttribute("student", new Student());
        return "signup_form"; 
    }


    @GetMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable long id){

        Optional<Student> s = repo.findById(id);

        if(s.isEmpty()) {
            System.out.println("Student with this ID does not exist" + id);
            return "redirect:/list_users";
        }
        repo.deleteById(id);
        return "redirect:/list_users";
    }

    @GetMapping("/toggleUser/{id}")
    public String toggleUserStatus(@PathVariable long id){

        Optional<Student> s = repo.findById(id);

        if(s.isEmpty()) {
            System.out.println("Student with this ID does not exist" + id);
            return "redirect:/list_users";
        }
        if(s.get().getActiveStatus().equals("Active"))
        {
            s.get().setActiveStatus("Inactive");
        }
        else
        {
            s.get().setActiveStatus("Active");
        }
        repo.save(s.get());
        return "redirect:/list_users";
    }

    @PostMapping("/process_register")
    public String processRegistration(Student student){

        Student s= repo.findByEmail(student.getStudentEmailAddress());

        if(s != null)
        {
            System.out.println("User with this email already exists");
            return "register_error";
        }
    	
    	BCryptPasswordEncoder encode = new BCryptPasswordEncoder();
    	String encodedPass = encode.encode(student.getPassword());
    	student.setActiveStatus("Active");
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
