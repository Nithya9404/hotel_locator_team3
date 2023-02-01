package com.example.springbackend.controller;

import com.example.springbackend.repository.HotelMumbaiRepository;
import com.example.springbackend.repository.HotelOotyRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HotelOotyController {
    private HotelOotyRepository hotelOotyRepository;
    public HotelOotyController(HotelOotyRepository hotelOotyRepository){
        this.hotelOotyRepository = hotelOotyRepository;
    }
    @CrossOrigin
    @GetMapping("ooty")
    public String getHotelsOoty(Model model){
        model.addAttribute("ooty",hotelOotyRepository.findAll());
        return "ooty";
    }
    @CrossOrigin
    @GetMapping("mapooty")
    public String getootymap(){
        return "mapooty";
    }
}
