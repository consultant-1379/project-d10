package com.cloud.project;

import com.cloud.project.processor.Processor;
import com.cloud.project.survey.Score;
import com.cloud.project.survey.Survey;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class ProcessorTests {

    @Mock
    Survey survey;

    Score score;
    @InjectMocks
    Processor processor;

    private ArrayList<Boolean> questions;
    private ArrayList<ArrayList<Boolean>> subQuestions;

    private final ArrayList<Boolean> culture = new ArrayList<>();
    private final ArrayList<Boolean> productDesign = new ArrayList<>();
    private final ArrayList<Boolean> team = new ArrayList<>();
    private final ArrayList<Boolean> process = new ArrayList<>();
    private final ArrayList<Boolean> architecture = new ArrayList<>();
    private final ArrayList<Boolean> maintenance = new ArrayList<>();
    private final ArrayList<Boolean> delivery = new ArrayList<>();
    private final ArrayList<Boolean> infrastructure = new ArrayList<>();
    private final ArrayList<Boolean> provisioning = new ArrayList<>();


    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);

        processor = new Processor();

        questions = new ArrayList<>();
        questions.add(true);
        questions.add(false);
        questions.add(false);
        questions.add(false);
        questions.add(false);
        questions.add(false);
        questions.add(false);
        questions.add(false);
        questions.add(false);

        subQuestions = new ArrayList<>();
        culture.add(true);
        culture.add(true);
        culture.add(true);
        culture.add(true);
        subQuestions.add(culture);

        productDesign.add(false);
        productDesign.add(false);
        productDesign.add(false);
        productDesign.add(false);
        subQuestions.add(productDesign);

        team.add(true);
        team.add(false);
        team.add(false);
        team.add(false);
        subQuestions.add(team);

        process.add(false);
        process.add(true);
        process.add(false);
        process.add(false);
        subQuestions.add(process);

        architecture.add(true);
        architecture.add(false);
        architecture.add(true);
        architecture.add(false);
        subQuestions.add(architecture);

        maintenance.add(false);
        maintenance.add(true);
        maintenance.add(false);
        maintenance.add(true);
        subQuestions.add(maintenance);

        delivery.add(true);
        delivery.add(false);
        delivery.add(false);
        delivery.add(true);
        subQuestions.add(delivery);

        infrastructure.add(true);
        infrastructure.add(true);
        infrastructure.add(true);
        infrastructure.add(true);
        subQuestions.add(infrastructure);

        provisioning.add(true);
        provisioning.add(true);
        provisioning.add(true);
        provisioning.add(true);
        subQuestions.add(provisioning);
    }
    
    @Test
    public void mainQuestionIsTrue() {
        when(survey.getQuestions()).thenReturn(questions);
        when(survey.getSubQuestions()).thenReturn(subQuestions);

        score = processor.calculateScore(survey);
        assertEquals(4, score.getCulture());
    }

    @Test
    public void mainQuestionIsFalseTrueCountNotOneNorTwo() {
        when(survey.getQuestions()).thenReturn(questions);
        when(survey.getSubQuestions()).thenReturn(subQuestions);

        score = processor.calculateScore(survey);
        assertEquals(-1, score.getProductDesign());
    }

    @Test
    public void trueCountOneWaterfall() {
        when(survey.getQuestions()).thenReturn(questions);
        when(survey.getSubQuestions()).thenReturn(subQuestions);

        score = processor.calculateScore(survey);
        assertEquals(2, score.getTeam());
    }

    @Test
    public void trueCountOneAgile() {
        when(survey.getQuestions()).thenReturn(questions);
        when(survey.getSubQuestions()).thenReturn(subQuestions);

        score = processor.calculateScore(survey);
        assertEquals(3, score.getProcess());
    }

    @Test
    public void trueCountTwoWaterfall() {
        when(survey.getQuestions()).thenReturn(questions);
        when(survey.getSubQuestions()).thenReturn(subQuestions);

        score = processor.calculateScore(survey);
        assertEquals(2, score.getArchitecture());
    }

    @Test
    public void trueCountTwoAgile() {
        when(survey.getQuestions()).thenReturn(questions);
        when(survey.getSubQuestions()).thenReturn(subQuestions);

        score = processor.calculateScore(survey);
        assertEquals(3, score.getMaintenance());
    }

    @Test
    public void trueCountTwoNotAgileAndNotWaterfall() {
        when(survey.getQuestions()).thenReturn(questions);
        when(survey.getSubQuestions()).thenReturn(subQuestions);

        score = processor.calculateScore(survey);
        assertEquals(-1, score.getDelivery());
    }
}
