package com.example.groupproject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "comments")
@EntityListeners(AuditingEntityListener.class)


public class Comment {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long commentID;

@Column(nullable = false, length = 20)
private String author;

@Column(nullable = false, length = 100)
private String author_comment;

@Column(nullable = false, length = 20)
private String date;


// public Comment(String author, String author_comment, String date){
//     super();
//     this.author = author;
//     this.author_comment = author_comment;
//     this.date = date;
// }

public long getCommentID() {
    return commentID;
}

public void setCommentID(long commentID) {
    this.commentID = commentID;
}

public String getAuthor() {
    return author;
}

public void setAuthor(String author) {
    this.author = author;
}

public String getAuthor_comment() {
    return author_comment;
}

public void setAuthor_comment(String author_comment) {
    this.author_comment = author_comment;
}

public String getDate() {
    return date;
}

public void setDate(String date) {
    this.date = date;
}

}
