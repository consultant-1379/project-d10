package com.cloud.project.controller;

import com.cloud.project.processor.Processor;
import com.cloud.project.service.ScoreService;
import com.cloud.project.survey.Score;
import com.cloud.project.survey.Survey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.net.URI;

@RestController
@RequestMapping("/survey")
public class SurveyController {

    @Autowired
    private ScoreService service;

    @Autowired
    private Processor processor;


    @GetMapping(value="/{id}", produces={"application/json","application/xml"})
    public ResponseEntity<Score> getScoreById(@PathVariable int id){
        Score score = service.getScore(id);
        if (score == null){
            return ResponseEntity.notFound().build();
        }
        else{
            return ResponseEntity.ok().body(score);
        }
    }

    @PostMapping(consumes={"application/json","application/xml"},
            produces={"application/json","application/xml"})
    public ResponseEntity<Score> createScore(@RequestBody Survey survey){
        Score score = processor.calculateScore(survey);
        service.addScore(score);
        URI uri = URI.create("/survey/" + survey.getId());
        return ResponseEntity.created(uri).body(score);
    }
}
