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
    // @CrossOrigin(origins="http://localhost:3000")
    // @PostMapping(path = "/Thread")
    // public ResponseEntity<HttpStatus> newComment(HttpServletRequest request){
    //     Comment newComment = new Comment();
        
    //     //Generating the date & time
    //     LocalDateTime myDateObj = LocalDateTime.now();
    //     DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("MMM dd yyyy HH:mm");  
    //     String formattedDate = myDateObj.format(myFormatObj);  
        
    //     //Setting the variables into the repository
    //     newComment.setAuthor(request.getParameter("author"));
        
    //     String TestAuthor = request.getParameter("author");
    //     System.out.println(TestAuthor);

    //     newComment.setAuthor_comment(request.getParameter("author_comment"));

    //     String TestAuthorComment = request.getParameter("author_comment");
    //     System.out.println(TestAuthorComment);

    //     newComment.setDate(formattedDate);
    //     repo.save(newComment);

    //     return ResponseEntity.ok(HttpStatus.OK);
    // }

    @RequestMapping(value = "/Thread",method = RequestMethod.POST)
    ResponseEntity<?> Registercomment(@Valid @RequestBody Comment comment) {
        Comment c = new Comment();
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
        
        repo.save(c);
        return ResponseEntity.ok(HttpStatus.OK);
        }
}



