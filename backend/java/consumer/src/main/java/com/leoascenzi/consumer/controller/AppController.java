package com.leoascenzi.consumer.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @GetMapping("/")
    public String healthcheck()
    {
        return "Server is up!";
    }
    
}
