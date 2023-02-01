package com.example.springbackend.controller;

import com.example.springbackend.repository.HotelBangloreRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HotelBangloreController {
    private HotelBangloreRepository hotelBangloreRepository;

    public HotelBangloreController(HotelBangloreRepository hotelBangloreRepository){ this.hotelBangloreRepository = hotelBangloreRepository; }
    @CrossOrigin
    @GetMapping("banglore")
    public String getHotelBanglore(Model model1){
        model1.addAttribute("banglore",hotelBangloreRepository.findAll());
        return "banglore";
    }
    @CrossOrigin
    @GetMapping("mapbanglore")
    public String getbangloremap(){
        return "mapbanglore";
    }
}
