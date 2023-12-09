package com.bc140.candidateservice;

import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CandidateServiceApplicationTests {

	@Test
	void contextLoads() {
		try {
			CandidateServiceApplication.main(new String[] {});
		} catch (Exception e) {
			fail("Exception occurred: " + e.getMessage());
		}
	}

}
