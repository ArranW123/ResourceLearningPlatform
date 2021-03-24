package com.example.groupproject;

import static org.assertj.core.api.Assertions.assertThat;

import javax.validation.Valid;

import com.example.groupproject.controller.CommentController;
import com.example.groupproject.model.Comment;
import com.example.groupproject.repository.CommentRepository;
import org.springframework.test.annotation.Rollback;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class CommentControllerTests {

    @Valid
    CommentController commentcontroller;

    @Autowired
    CommentRepository repo;

    @Autowired
    TestEntityManager entityManager;

    @Test
    public void testOne() {

        Comment comment = new Comment();
        comment.setAuthor("Test Name");
        comment.setAuthor_comment("Test Comment");
        commentcontroller.getComment(comment);        
        Comment existComment = entityManager.find(Comment.class, comment.getCommentID());
        

        //assertThat(savedComment.status(HttpStatus.OK));
        assertThat(existComment.getAuthor()).isEqualTo(comment.getAuthor());
        
    }
    
    @Test
    public void ExampletestOne() { 
        Comment c = new Comment();
        c.setAuthor("Test Name");
        c.setAuthor_comment("Test Comment");
        
        Comment savedComment = repo.save(c);
        Comment existComment = entityManager.find(Comment.class, savedComment.getCommentID());

        assertThat(existComment.getAuthor()).isEqualTo(c.getAuthor());
    }


    

}
