package com.example.groupproject.controller;

import java.util.ArrayList;
import java.util.List;

import javax.xml.datatype.DatatypeConstants.Field;

import com.example.groupproject.repository.CommentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.spring5.expression.Fields;

@RestController
public class CommentController {
    @Autowired
    CommentRepository fieldRepository;
    @CrossOrigin(origins="http://localhost:3000")

    public List<Fields> getAllComments(){
        
        return null;
    }


}
