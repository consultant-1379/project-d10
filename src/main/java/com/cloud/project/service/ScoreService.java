package com.cloud.project.service;

import com.cloud.project.survey.Score;

import java.util.List;

public interface ScoreService {

    void addScore(Score score);

    Score getScore(int id);

    List<Score> getAllScores();
}
