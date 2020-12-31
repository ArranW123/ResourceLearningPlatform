package com.example.groupproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.groupproject.model.Doc;

public interface DocRepository extends JpaRepository<Doc, Long>{

}
