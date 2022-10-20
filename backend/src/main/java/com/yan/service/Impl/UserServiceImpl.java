package com.yan.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yan.domain.User;
import com.yan.mapper.UserMapper;
import com.yan.service.IUserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl< UserMapper, User> implements IUserService {
}
