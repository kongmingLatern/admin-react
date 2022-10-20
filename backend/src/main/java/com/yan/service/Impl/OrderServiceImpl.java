package com.yan.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yan.domain.Order;
import com.yan.mapper.OrderMapper;
import com.yan.service.IOrderService;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl extends ServiceImpl<OrderMapper, Order> implements IOrderService {
}
