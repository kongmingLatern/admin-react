package com.yan.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yan.domain.Good;
import com.yan.mapper.GoodMapper;
import com.yan.service.IGoodService;
import org.springframework.stereotype.Service;

@Service
public class GoodServiceImpl extends ServiceImpl<GoodMapper, Good> implements IGoodService {
}
