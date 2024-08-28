package com.cloud.project;

import com.cloud.project.survey.Score;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ScoreTest {

    private Score score;

    @BeforeEach
    void init(){
        score = new Score();
    }

    @Test
    public void setGetScoreTest(){
        score.setCulture(1);
        assertEquals(1, score.getCulture());

        score.setProductDesign(1);
        assertEquals(1, score.getProductDesign());

        score.setTeam(1);
        assertEquals(1, score.getTeam());

        score.setProcess(1);
        assertEquals(1, score.getProcess());

        score.setArchitecture(1);
        assertEquals(1, score.getArchitecture());

        score.setMaintenance(1);
        assertEquals(1, score.getMaintenance());

        score.setDelivery(1);
        assertEquals(1, score.getDelivery());

        score.setProvisioning(1);
        assertEquals(1, score.getProvisioning());

        score.setInfrastructure(1);
        assertEquals(1, score.getInfrastructure());
    }
}
