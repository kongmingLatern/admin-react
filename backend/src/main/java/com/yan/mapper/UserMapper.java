package com.yan.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yan.domain.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
