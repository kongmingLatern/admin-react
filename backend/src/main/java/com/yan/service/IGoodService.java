package com.yan.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.yan.domain.Good;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IGoodService extends IService<Good> {
}
