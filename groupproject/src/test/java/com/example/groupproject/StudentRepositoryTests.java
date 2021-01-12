package com.example.groupproject;

import com.example.groupproject.model.Student;
import com.example.groupproject.repository.StudentRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class StudentRepositoryTests {
   
    @Autowired
    private StudentRepository repo;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testCreateStudent(){
        Student student = new Student();
        student.setStudentEmailAddress("1911533@brunel.ac.uk");
        student.setPassword("password");
        student.setStudentFirstName("Arran");
        student.setStudentLastName("Weeresekere");

        Student savedStudent = repo.save(student);
        Student existStudent = entityManager.find(Student.class, savedStudent.getStudentID());

        assertThat(existStudent.getStudentEmailAddress()).isEqualTo(student.getStudentEmailAddress());

    }

}
