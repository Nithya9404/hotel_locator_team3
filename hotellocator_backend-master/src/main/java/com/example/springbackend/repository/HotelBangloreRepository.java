package com.example.springbackend.repository;

import com.example.springbackend.Hotels.HotelBanglore;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HotelBangloreRepository extends MongoRepository<HotelBanglore, String> {
}
