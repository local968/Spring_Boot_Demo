package com.liancheng.link.controller;

import com.liancheng.link.domain.User;
import com.liancheng.link.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private MailService mailService;

    @GetMapping("/getUser")
    public User getUser() {
        User user = new User();
        user.setUsername("yyyy");
        user.setHobby("running");
        return user;
    }

    @GetMapping("/sendMail")
    public void sendMail(){
        mailService.sendSimpleMail("543984225@qq.com","test","酷酷酷酷酷酷");
    }
}
