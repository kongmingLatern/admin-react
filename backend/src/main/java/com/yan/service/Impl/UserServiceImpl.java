package com.yan.service.Impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yan.controller.Code;
import com.yan.domain.User;
import com.yan.exception.BusinessException;
import com.yan.mapper.UserMapper;
import com.yan.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl< UserMapper, User> implements IUserService {
    @Autowired
    UserMapper userMapper;
    @Override
    public User login(User user) {
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(User::getUsername,user.getUsername());
        User selectOne = userMapper.selectOne(wrapper);
        return selectOne;
    }

    @Override
    public boolean register(User user) {
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(User::getUsername,user.getUsername());
        User selectOne = userMapper.selectOne(wrapper);
        if(selectOne!=null) throw new BusinessException(Code.BUSINESS_ERR,"用户名已经有人注册啦");
        return userMapper.insert(user)>0;
    }
}
