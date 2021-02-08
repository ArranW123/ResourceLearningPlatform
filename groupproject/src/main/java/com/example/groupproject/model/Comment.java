package com.example.groupproject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "comments")

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
