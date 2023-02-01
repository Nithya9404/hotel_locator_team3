package com.example.springbackend.controller;

import com.example.springbackend.repository.HotelKodaikanalRepository;
import com.example.springbackend.repository.HotelRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller

public class HotelKodaikanalController {
    private HotelKodaikanalRepository hotelKodaikanalRepository;
    public HotelKodaikanalController(HotelKodaikanalRepository hotelKodaikanalRepository){
        this.hotelKodaikanalRepository = hotelKodaikanalRepository;
    }
    @CrossOrigin
    @GetMapping("kodaikanal")
    public String getHotelsKodaikanal(Model model){
        model.addAttribute("kodaikanal",hotelKodaikanalRepository.findAll());
        return "kodaikanal";
    }
    @CrossOrigin
    @GetMapping("map")
    public String getmap(){
        return "map";
    }
}
