package com.example.groupproject.repository;

import com.example.groupproject.model.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepository extends JpaRepository<Student, Long> {
	
	@Query("SELECT u FROM Student u Where u.StudentEmailAddress = ?1")
	Student findByEmail(String StudentEmailAddress);

}
