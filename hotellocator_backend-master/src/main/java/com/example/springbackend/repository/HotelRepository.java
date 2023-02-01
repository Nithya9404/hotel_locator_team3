package com.example.springbackend.repository;

import com.example.springbackend.Hotels.HotelBanglore;
import com.example.springbackend.Hotels.HotelChennai;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface HotelRepository extends MongoRepository<HotelChennai, String> {
    Page<HotelChennai> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
}

