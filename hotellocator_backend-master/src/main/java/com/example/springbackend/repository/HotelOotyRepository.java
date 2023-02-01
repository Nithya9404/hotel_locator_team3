package com.example.springbackend.repository;

import com.example.springbackend.Hotels.HotelOoty;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelOotyRepository extends MongoRepository<HotelOoty,String> {
}
