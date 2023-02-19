package com.example.springbackend.controller;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

public class HotelKodaikanal {

    private static WebDriver driver;

    @BeforeAll
    public static void setUp() {
        System.setProperty("webdriver.chrome.driver","C:\\browser_drivers\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    @Test
    public void testTitle() {
        driver.get("http://localhost:8080/kodaikanal");
        String title = driver.getTitle();
        Assertions.assertEquals("Hotels in Kodaikanal", title);
    }

    @Test
    public void testLink(){
        WebElement link = driver.findElement(By.linkText("Show on map"));
        String href = link.getAttribute("href");
        Assertions.assertEquals("http://localhost:8080/map",href);
        link.click();
        String newTitle = driver.getTitle();
        Assertions.assertEquals("Map of Kodaikanal",newTitle);
    }
    @Test
    public void testNumberHotels(){
        driver.get("http://localhost:8080/kodaikanal");
        List<WebElement> hotelRows = driver.findElements(By.cssSelector("table tbody tr"));
        int hotelCount = hotelRows.size();
        Assertions.assertEquals(10, hotelCount);
    }
}
