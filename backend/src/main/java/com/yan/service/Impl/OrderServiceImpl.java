package com.yan.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yan.domain.Order;
import com.yan.mapper.GoodMapper;
import com.yan.mapper.OrderMapper;
import com.yan.mapper.UserMapper;
import com.yan.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class OrderServiceImpl extends ServiceImpl<OrderMapper, Order> implements IOrderService {
}
