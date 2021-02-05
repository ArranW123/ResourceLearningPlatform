package com.example.groupproject.processor;

import com.example.groupproject.repository.CommentRepository;
import com.example.groupproject.model.Comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

public class CommentStorage {
    @Autowired
    CommentRepository commentRepository;

    public Comment saveComment(){
        
        return null;

    }
}
