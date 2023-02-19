package com.example.springbackend.controller;

import org.bson.Document;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.junit.After;
import java.util.List;

public class HotelOoty {

    private static WebDriver driver;
    private static MongoClient mongoClient;
    private static MongoDatabase database;
    private static MongoCollection<Document> collection;

    @BeforeAll
    public static void setUp() {
        System.setProperty("webdriver.chrome.driver", "C:\\browser_drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        mongoClient = MongoClients.create("mongodb://localhost:27017");
        database = mongoClient.getDatabase("Hoteldetails");
        collection = database.getCollection("ooty");

    }

    @Test
    public void testTitle() {
        driver.get("http://localhost:8080/ooty");
        String title = driver.getTitle();
        Assertions.assertEquals("Hotels in Ooty", title);
    }

    @Test
    public void testLink() {
        WebElement link = driver.findElement(By.linkText("Show on map"));
        String href = link.getAttribute("href");
        Assertions.assertEquals("http://localhost:8080/mapooty", href);
        link.click();
        String newTitle = driver.getTitle();
        Assertions.assertEquals("Map of Ooty", newTitle);
    }

   @Test
   public void testNumberHotels(){
       driver.get("http://localhost:8080/ooty");
       List<WebElement> hotelRows = driver.findElements(By.cssSelector("table tbody tr"));
       int hotelCount = hotelRows.size();
       Assertions.assertEquals(21, hotelCount);
   }

    @After
    public void tearDown() {
        mongoClient.close();
    }
}

