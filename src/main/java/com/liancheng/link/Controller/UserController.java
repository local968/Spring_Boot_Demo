package com.liancheng.link.Controller;

import com.liancheng.link.domain.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/user")
public class UserController {
    @GetMapping("/getUser")
    public User getUser() {
        User user = new User();
        user.setUsername("yyyy");
        user.setHobby("running");
        return user;
    }
}
