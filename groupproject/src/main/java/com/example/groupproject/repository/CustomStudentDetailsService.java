package com.example.groupproject.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.groupproject.model.CustomStudentDetails;
import com.example.groupproject.model.Student;

public class CustomStudentDetailsService implements UserDetailsService {
	
	@Autowired
	private StudentRepository repo;

	@Override
	public UserDetails loadUserByUsername(String StudentEmailAddress) throws UsernameNotFoundException {
		Student student = repo.findByEmail(StudentEmailAddress);

		if(student == null || student.getActiveStatus().equals("Inactive")) {
			throw new UsernameNotFoundException("Student not found or account inactive");
		}
		return new CustomStudentDetails(student);
	}

}
