package com.example.groupproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class GroupprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(GroupprojectApplication.class, args);
	}

}
