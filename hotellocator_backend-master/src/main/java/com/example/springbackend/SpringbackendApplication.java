package com.example.springbackend;

import com.example.springbackend.repository.HotelRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;


@SpringBootApplication
@Configuration
@EnableMongoRepositories(basePackageClasses = HotelRepository.class)
@CrossOrigin
public class SpringbackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(SpringbackendApplication.class, args);
	}

}
