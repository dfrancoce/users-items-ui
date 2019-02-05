package com.dfc.users.ui.controller;

import com.dfc.users.ui.service.UserService;
import com.dfc.users.ui.service.dto.UserDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@Api(tags = "User", description = "Endpoint to perform the user actions")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ApiOperation("Login")
    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public List<UserDto> login(@RequestParam Map<String, String> body) {
        if (body.containsKey("username") && body.containsKey("password")) {
            return userService.loginAndGetUsers(body.get("username"), body.get("password"));
        } else {
            return null;
        }
    }
}
