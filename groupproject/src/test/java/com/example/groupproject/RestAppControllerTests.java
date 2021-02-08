package com.example.groupproject;

import com.example.groupproject.config.MyUserDetails;
import com.example.groupproject.jwt.jwtconfig.JwtTokenUtil;
import com.example.groupproject.model.Student;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.Assert.assertNotNull;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
public class RestAppControllerTests {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Test
    public void shouldNotAllowAccessToUnauthenticatedUsers() throws Exception {

        String username = "existentuser";
        String password = "password";

        String body = "{\"username\":\"" + username + "\", \"password\":\"" + password + "\"}";

        mvc.perform(MockMvcRequestBuilders.post("/user/updateProfile").content(body)).andExpect(status().isUnauthorized());
    }

    @Test
    public void shouldGenerateAuthToken() throws Exception {

        Student s = new Student();
        String token = jwtTokenUtil.generateToken(new MyUserDetails(s));
        assertNotNull(token);
    }

}