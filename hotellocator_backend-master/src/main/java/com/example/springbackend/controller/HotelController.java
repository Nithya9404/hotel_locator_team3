package com.example.springbackend.controller;


import com.example.springbackend.repository.HotelBangloreRepository;
import com.example.springbackend.repository.HotelRepository;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;

@Controller

public class HotelController {
private HotelRepository hotelRepository;
    public HotelController(HotelRepository hotelRepository){
        this.hotelRepository = hotelRepository;
    }
    @CrossOrigin
    @GetMapping("chennai")
    public String getHotelsChennai(Model model){
        model.addAttribute("chennai",hotelRepository.findAll());
        return "chennai";
    }
    @CrossOrigin
    @GetMapping("mapchennai")
    public String getmapchennai(){
        return "mapchennai";
    }
}

