package com.cloud.project.service;

import com.cloud.project.repository.ScoreRepository;
import com.cloud.project.survey.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreServiceImpl implements ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    @Override
    public void addScore(Score score) {
        scoreRepository.save(score);
    }

    @Override
    public Score getScore(int id) {
        return scoreRepository.findById(id).get();
    }

    @Override
    public List<Score> getAllScores() {
        return scoreRepository.findAll();
    }
}
