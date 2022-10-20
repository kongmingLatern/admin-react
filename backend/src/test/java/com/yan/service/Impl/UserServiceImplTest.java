package com.yan.service.Impl;

import com.yan.domain.User;
import com.yan.mapper.UserMapper;
import com.yan.service.IUserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class UserServiceImplTest {
    @Autowired
    IUserService userService;
    @Test
    public void addTest(){
        User user = new User();
        user.setUsername("123");
        user.setPassword("123");
        user.setRealName("123");
        userService.save(user);
    }
}