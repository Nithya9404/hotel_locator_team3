package com.example.springbackend.Hotels;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class address {
    private String full;
    private String postalCode;
    private String country;
    private String region;

    public String getFull() {
        return full;
    }
    public address(String full,String postalCode,String country,String region){
        this.full = full;
        this.postalCode = postalCode;
        this.country = country;
        this.region = region;

    }

    public void setFull(String full) {
        this.full = full;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    @Override
    public String toString() {
        return "address{" +
                "full='" + full + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", country='" + country + '\'' +
                ", region='" + region + '\'' +
                '}';
    }
}
