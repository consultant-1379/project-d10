package com.cloud.project.processor;

import com.cloud.project.survey.Score;
import com.cloud.project.survey.Survey;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;

@Component
public class Processor {

    ArrayList<Integer> score;

    public Processor() {
        score = new ArrayList<>();
    }

    public Score calculateScore(Survey survey) {
        ArrayList<Boolean> questions = survey.getQuestions();
        ArrayList<ArrayList<Boolean>> subQuestions = survey.getSubQuestions();
        ArrayList<Boolean> subList;

        for(int i = 0; i < questions.size(); i++) {
            
            if(Boolean.TRUE.equals(questions.get(i))) {
                score.add(4);
            } else {
                subList = subQuestions.get(i);
                int trueCount = Collections.frequency(subList, true);

                if(trueCount == 1) {
                    if(subList.get(0) || subList.get(2)) {
                        score.add(2);
                    } else if (subList.get(1) || subList.get(3)) {
                        score.add(3);
                    }
                } else if (trueCount == 2) {
                    if(subList.get(0) && subList.get(2)) {
                        score.add(2);
                    } else if (subList.get(1) && subList.get(3)) {
                        score.add(3);
                    } else {
                        score.add(-1);
                    }
                } else {
                    score.add(-1);
                }
            }
        }

        return new Score(score.get(0), score.get(1), score.get(2), score.get(3), score.get(4), score.get(5), score.get(6), score.get(7), score.get(8));
    }
}
