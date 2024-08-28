package com.cloud.project;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.cloud.project.repository.ScoreRepository;
import com.cloud.project.service.ScoreService;
import com.cloud.project.service.ScoreServiceImpl;
import com.cloud.project.survey.Score;
import com.jayway.jsonpath.Option;

import antlr.collections.List;

public class ScoreServiceTest {

    @Mock
    ScoreRepository scoreRepository;
    @InjectMocks
    ScoreServiceImpl scoreService;
    Score score;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        score = new Score();
        score.setId(5);
    }

    @Test
    public void getScoreTest() {
        scoreRepository.save(score);
        when(scoreRepository.findById(5)).thenReturn(Optional.ofNullable(score));
        Score result = scoreService.getScore(5);
        assertEquals(score.getId(), result.getId());
    }

    @Test
    public void getAllScoresTest(){
        scoreRepository.save(score);
        ArrayList<Score> list = new ArrayList<Score>();
        list.add(score);
        when(scoreRepository.findAll()).thenReturn(list);
        java.util.List<Score> newList = scoreRepository.findAll();
        assertEquals(scoreRepository.findAll(), newList);
    }
}
