package com.example.groupproject.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.xml.datatype.DatatypeConstants.Field;

import com.example.groupproject.model.Comment;
import com.example.groupproject.processor.CommentStorage;
import com.example.groupproject.repository.CommentRepository;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.spring5.expression.Fields;
import com.example.groupproject.repository.CommentRepository;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController

public class CommentController {
    @Autowired
    CommentRepository repo;
    
    @RequestMapping(value = "/Thread",method = RequestMethod.POST)
	public
    ResponseEntity<?> Registercomment(@Valid @RequestBody Comment comment) {
        Comment c = new Comment();
        //Setting the values from front-end into "c"
        c.setAuthor(comment.getAuthor());
        c.setAuthor_comment(comment.getAuthor_comment());

        //Generating the date & time
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("MMM dd yyyy HH:mm");  
        String formattedDate = myDateObj.format(myFormatObj);  
        c.setDate(formattedDate);
      
        //Testing
        String author = c.getAuthor();
        System.out.println(author);
        
        //Testing            
        String commentvar = c.getAuthor_comment();
        System.out.println(commentvar);
        System.out.println(formattedDate);
        
        //Saving to repo
        repo.save(c);
        return ResponseEntity.ok(HttpStatus.OK);
        }

       
        @RequestMapping(value = "/getComment",method = RequestMethod.GET)
		public
        List<Comment> getComment(@Valid Comment comment) {
            return repo.findAll();
        }
        
}



