package com.example.groupproject.repository;

import java.util.List;

import com.example.groupproject.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>{
    @Override
    List<Comment> findAll();    
}
