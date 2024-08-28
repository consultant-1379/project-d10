package com.cloud.project;

import com.cloud.project.service.ScoreServiceImpl;
import com.cloud.project.survey.Score;
import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.test.context.jdbc.Sql;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Sql("/pre-start.sql")
public class ControllerTests {
    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ScoreServiceImpl score;

    @Test
    public void testValuesAreThere(){
        assertThat(score.getAllScores().size(), is(5));
    }

    @Test
    public void testForPost() throws URISyntaxException, FileNotFoundException, ParseException {
        final String url = "/survey";
        System.out.println("Working Directory = " + System.getProperty("user.dir"));
        URI uri = new URI(url);
        Object obj = new JSONParser().parse(new FileReader("src/test/resources/data.json"));
        JSONObject jo = (JSONObject) obj;
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-COM-PERSIST", "true");
        HttpEntity<JSONObject> request = new HttpEntity<>(jo,headers);
        ResponseEntity<String> result = this.restTemplate.postForEntity(uri, request, String.class);
        assertEquals(201, result.getStatusCodeValue());
    }

    @Test
    void testForGet() {
        ResponseEntity<JSONObject> response = restTemplate.exchange(
                "/survey/1",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<JSONObject>() {
                });
        JSONObject responseBody = response.getBody();
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testForGetNull() {
        ResponseEntity<JSONObject> response = restTemplate.exchange(
                "/survey/20",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<JSONObject>() {
                });
        JSONObject responseBody = response.getBody();
        assertEquals(500, response.getStatusCodeValue());
    }

   @Test
    void testGetNodeByIdReturnsOk() {
        ResponseEntity<Score> responseEntity = restTemplate.exchange(
                "/survey/1",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<Score>() {
                });
        assertThat(responseEntity.getStatusCode(), is(HttpStatus.OK));
    }
}
