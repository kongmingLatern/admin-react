package com.yan.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.yan.domain.Order;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Transactional
public interface IOrderService extends IService<Order> {
}
