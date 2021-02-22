package com.example.groupproject.processor;

import com.example.groupproject.repository.CommentRepository;

import java.util.List;
import java.util.Optional;

import com.example.groupproject.model.Comment;
import com.example.groupproject.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class CommentStorage {
    @Autowired
    CommentRepository commentRepository;

    public Comment saveComment(){
        try{
            //Comment comment = new Comment(author, author_comment, date)

        }catch(Exception e){
            e.printStackTrace();
        }
        return null;

    }
    
    public Optional <Comment> getComment(Long commentID){
        return commentRepository.findById(commentID);

    }

    public List <Comment> getComments(){
        return commentRepository.findAll();
    }
}
