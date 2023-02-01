package com.example.springbackend.repository;

import com.example.springbackend.Hotels.HotelKodaikanal;
import com.example.springbackend.Hotels.HotelMumbai;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelMumbaiRepository extends MongoRepository<HotelMumbai, String> {
}
