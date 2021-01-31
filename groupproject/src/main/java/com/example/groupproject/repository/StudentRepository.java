package com.example.groupproject.repository;

import com.example.groupproject.model.Student;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {


}
