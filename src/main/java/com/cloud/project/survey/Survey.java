package com.cloud.project.survey;

import javax.persistence.*;
import java.util.ArrayList;


public class Survey {


    private int id;

    private ArrayList<Boolean> questions;

    private ArrayList<ArrayList<Boolean>> subQuestions;

    private ArrayList<Score> score;

    public Survey() {
    }

    public Survey(ArrayList<Boolean> questions, ArrayList<ArrayList<Boolean>> subQuestions) {
        this.questions = questions;
        this.subQuestions = subQuestions;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ArrayList<Boolean> getQuestions() {
        return questions;
    }

    public void setQuestions(ArrayList<Boolean> questions) {
        this.questions = questions;
    }

    public ArrayList<ArrayList<Boolean>> getSubQuestions() {
        return subQuestions;
    }

    public void setSubQuestions(ArrayList<ArrayList<Boolean>> subQuestions) {
        this.subQuestions = subQuestions;
    }

    public ArrayList<Score> getScore() {
        return score;
    }

    public void setScore(ArrayList<Score> score) {
        this.score = score;
    }
}
