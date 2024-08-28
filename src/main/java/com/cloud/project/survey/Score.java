package com.cloud.project.survey;

import javax.persistence.*;

@Entity
@Table(name="score")
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;


    private int culture;
    private int productDesign;

    private int team;
    private int process;
    private int architecture;
    private int maintenance;
    private int delivery;
    private int provisioning;
    private int infrastructure;

    public Score(){

    }

    public Score(int culture, int productDesign, int team, int process, int architecture, int maintenance, int delivery, int provisioning, int infrastructure) {
        this.culture = culture;
        this.productDesign = productDesign;
        this.team = team;
        this.process = process;
        this.architecture = architecture;
        this.maintenance = maintenance;
        this.delivery = delivery;
        this.provisioning = provisioning;
        this.infrastructure = infrastructure;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCulture() {
        return culture;
    }

    public void setCulture(int culture) {
        this.culture = culture;
    }

    public int getProductDesign() {
        return productDesign;
    }

    public void setProductDesign(int productDesign) {
        this.productDesign = productDesign;
    }

    public int getTeam() {
        return team;
    }

    public void setTeam(int team) {
        this.team = team;
    }

    public int getProcess() {
        return process;
    }

    public void setProcess(int process) {
        this.process = process;
    }

    public int getArchitecture() {
        return architecture;
    }

    public void setArchitecture(int architecture) {
        this.architecture = architecture;
    }

    public int getMaintenance() {
        return maintenance;
    }

    public void setMaintenance(int maintenance) {
        this.maintenance = maintenance;
    }

    public int getDelivery() {
        return delivery;
    }

    public void setDelivery(int delivery) {
        this.delivery = delivery;
    }

    public int getProvisioning() {
        return provisioning;
    }

    public void setProvisioning(int provisioning) {
        this.provisioning = provisioning;
    }

    public int getInfrastructure() {
        return infrastructure;
    }

    public void setInfrastructure(int infrastructure) {
        this.infrastructure = infrastructure;
    }





}
