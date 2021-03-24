package com.example.groupproject;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

@SpringBootTest
@AutoConfigureMockMvc
class DocControllerTest {

    @Autowired
	MockMvc mockMvcTest;

    MvcResult mvcResultTest;

    @Test
	public void getListFiles() throws Exception {
		this.mockMvcTest.perform(get("/files"))
				// Print the result of the post request.
				.andDo(print())
				// Check if we get is found reply back.
				.andExpect(status().isOk());
	}

    @Test
	public void getFile() throws Exception {
		
        this.mockMvcTest.perform(get("/files/2")).andDo(print()).andExpect(status().isOk());

	}

}
