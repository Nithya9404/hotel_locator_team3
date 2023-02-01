package com.example.springbackend.controller;

import com.example.springbackend.repository.HotelKodaikanalRepository;
import com.example.springbackend.repository.HotelMumbaiRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HotelMumbaiController {
    private HotelMumbaiRepository hotelMumbaiRepository;
    public HotelMumbaiController(HotelMumbaiRepository hotelMumbaiRepository){
        this.hotelMumbaiRepository = hotelMumbaiRepository;
    }
    @CrossOrigin
    @GetMapping("mumbai")
    public String getHotelsMumbai(Model model){
        model.addAttribute("mumbai",hotelMumbaiRepository.findAll());
        return "mumbai";
    }
    @CrossOrigin
    @GetMapping("mapmumbai")
    public String getmumbaimap(){
        return "mapmumbai";
    }
}
