package com.example.springbackend.repository;

import com.example.springbackend.Hotels.HotelKodaikanal;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelKodaikanalRepository extends MongoRepository<HotelKodaikanal, String> {
}
