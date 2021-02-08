package com.example.groupproject.jwt.dto;


import com.example.groupproject.model.Student;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDTO {
    private Student student;

	public void setStudent(Student user) {
		this.student= user;
		// TODO Auto-generated method stub
		
	}

	public Student getStudent() {
		return student;
	}
}
