package com.yan.controller;

import com.yan.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    IOrderService orderService;
    @GetMapping
    public Result getAll()
    {
        Map<String, Object> map = orderService.getMap(null);
        return new Result(map==null?Code.GET_ERR:Code.GET_OK,map,map==null?"查询失败":"查询成功");
    }
}
