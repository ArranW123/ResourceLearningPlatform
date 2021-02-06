package com.example.groupproject.RestController;

import com.example.groupproject.dto.ProfileUpdated;
import com.example.groupproject.dto.RegisterStudent;
import com.example.groupproject.model.Student;
import com.example.groupproject.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.Optional;


@RestController
public class RestAppController {

    @Autowired
    private StudentRepository repo;

    @RequestMapping(value = "/registerProcess",method = RequestMethod.POST)
    ResponseEntity<?> registerUser(@Valid @RequestBody RegisterStudent registerStudent) {
        Student s= new Student();

        BCryptPasswordEncoder encode = new BCryptPasswordEncoder(12); // Strength set as 12

        String encodedPass = encode.encode(registerStudent.getPassword());

        s.setActiveStatus("Active");
        s.setPassword(encodedPass);
        s.setStudentEmailAddress(registerStudent.getEmail());
        s.setStudentLastName(registerStudent.getLastName());
        s.setStudentFirstName(registerStudent.getFirstName());

        try {
            repo.save(s);
        }
        catch (Exception e)
        {
            return new ResponseEntity("{\"message\" : \"Email Already In Use\"}", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity("{\"message\" : \"Registered Successfully\"}", HttpStatus.OK);
    }


    @GetMapping("/user/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable long id){

        Optional<Student> s = repo.findById(id);

        if(s.isEmpty()) {
            System.out.println("Student with this ID does not exist" + id);
            return new ResponseEntity("{\"message\" : \"User does not exist\"}", HttpStatus.BAD_REQUEST);
        }
        repo.deleteById(id);
        return new ResponseEntity("{\"message\" : \"User  deleted\"}", HttpStatus.OK);
    }


    @RequestMapping(value = "/user/updateProfile",method = RequestMethod.POST)
    ResponseEntity<?> updateUserProfile(@Valid @RequestBody RegisterStudent registerStudent)  {
        Student s= repo.findByEmail(registerStudent.getEmail());

        String encodedPass = "";
        BCryptPasswordEncoder encode = new BCryptPasswordEncoder(12); // Strength set as 12

        if(!registerStudent.getPassword().equals(s.getPassword()) ) {
            if (!encode.matches(registerStudent.getPassword(), s.getPassword())) {
                encodedPass = encode.encode(registerStudent.getPassword());
                s.setPassword(encodedPass);
            }
        }
        s.setActiveStatus("Active");
        s.setStudentEmailAddress(registerStudent.getEmail());
        s.setStudentLastName(registerStudent.getLastName());
        s.setStudentFirstName(registerStudent.getFirstName());

        try {
            repo.save(s);
        }
        catch (Exception e)
        {
            return new ResponseEntity("{\"message\" : \"Unknown Error Occured.Try Again\"}", HttpStatus.BAD_REQUEST);
        }

        ProfileUpdated profileUpdated= new ProfileUpdated();
        profileUpdated.setMessage("Profile Updated Successfully ");
        profileUpdated.setResponseObject(s);


        return new ResponseEntity(profileUpdated, HttpStatus.OK);


    }


    @GetMapping("/user/toggleUser/{id}")
    public ResponseEntity<?> toggleUserStatus(@PathVariable long id){

        Optional<Student> s = repo.findById(id);

        if(s.isEmpty()) {
            System.out.println("Student with this ID does not exist" + id);
            return new ResponseEntity("{\"message\" : \"User does not exist\"}", HttpStatus.BAD_REQUEST);
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
        return new ResponseEntity("{\"message\" : \"User  status changed\"}", HttpStatus.OK);
    }



}
