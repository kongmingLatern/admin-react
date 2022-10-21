package com.yan.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.yan.domain.Good;
import com.yan.domain.Order;
import com.yan.domain.User;
import com.yan.service.IGoodService;
import com.yan.service.IOrderService;
import com.yan.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    IOrderService orderService;
    @Autowired
    IGoodService goodService;
    @Autowired
    IUserService userService;

    @GetMapping
    public Result getAll() {
        List<Map<String, Object>> maps = orderService.listMaps();
        for (Map map : maps) {
            String uid = (String) map.get("uid");
            if (uid != null) {
                LambdaQueryWrapper<User> queryUserWrapper = new LambdaQueryWrapper();
                queryUserWrapper.eq(User::getUid, uid);
                Map<String, Object> user = userService.getMap(queryUserWrapper);
                if (user != null) {
                    map.putAll(user);
                }
            }

            String gid = (String) map.get("gid");
            if (gid != null) {
                LambdaQueryWrapper<Good> queryGoodWrapper = new LambdaQueryWrapper();
                queryGoodWrapper.eq(Good::getGid, gid);
                Map<String, Object> good = goodService.getMap(queryGoodWrapper);
                if (good != null) {
                    map.putAll(good);
                }
            }

        }
        return new Result(maps == null ? Code.GET_ERR : Code.GET_OK, maps, maps == null ? "查询失败" : "查询成功");
    }

    @PostMapping
    public Result add(@RequestBody Order order) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        HttpSession session = request.getSession();
        String uid = (String) session.getAttribute("uid");
        order.setUid(uid);
        order.setOTime(new Date());
        boolean flag = orderService.save(order);
        return new Result(flag ? Code.SAVE_OK : Code.SAVE_ERR, null, flag ? "添加成功" : "添加失败");
    }

    @DeleteMapping
    public Result delete(String oid) {
        boolean flag = orderService.removeById(oid);
        return new Result(flag ? Code.DELETE_OK : Code.DELETE_ERR, null, flag ? "删除成功" : "删除失败");
    }

    @PutMapping
    public Result update(@RequestBody Order order) {
        boolean flag = orderService.updateById(order);
        return new Result(flag ? Code.UPDATE_OK : Code.UPDATE_ERR, null, flag ? "修改成功" : "修改失败");
    }

    @GetMapping("/getByOid")
    public Result getByOid(String oid) {
        LambdaQueryWrapper<Order> queryOrderWrapper = new LambdaQueryWrapper<>();
        queryOrderWrapper.eq(Order::getOid, oid);
        Map<String, Object> map = orderService.getMap(queryOrderWrapper);
        String uid = (String) map.get("uid");
        if (uid != null) {
            LambdaQueryWrapper<User> queryUserWrapper = new LambdaQueryWrapper();
            queryUserWrapper.eq(User::getUid, uid);
            Map<String, Object> user = userService.getMap(queryUserWrapper);
            if (user != null) {
                map.putAll(user);
            }
        }
        String gid = (String) map.get("gid");
        if (gid != null) {
            LambdaQueryWrapper<Good> queryGoodWrapper = new LambdaQueryWrapper();
            queryGoodWrapper.eq(Good::getGid, gid);
            Map<String, Object> good = goodService.getMap(queryGoodWrapper);
            if (good != null) {
                map.putAll(good);
            }
        }
        return new Result(map == null ? Code.GET_ERR : Code.GET_OK, map, map == null ? "查询失败" : "查询成功");
    }
}
