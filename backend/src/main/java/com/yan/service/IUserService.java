package com.yan.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.yan.domain.User;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IUserService extends IService<User> {
    /**
     * 登录
     * @param user
     * @return
     */
    User login(User user);
    /**
     * 注册
     */
    boolean register(User user);
}
