package com.yan.controller;

import com.yan.domain.User;
import com.yan.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    IUserService userService;
    @GetMapping
    public Result getAll(){
        List<Map<String, Object>> maps = userService.listMaps();
        return new Result(maps==null?Code.GET_ERR:Code.GET_OK,maps,maps==null?"查询失败":"查询成功");
    }
    @DeleteMapping
    public Result delete(String uid){
        boolean flag = userService.removeById(uid);
        return new Result(flag?Code.DELETE_OK:Code.DELETE_ERR,null,flag?"删除成功":"删除失败");
    }
    @PutMapping
    public Result update(@RequestBody User user)
    {
        boolean flag = userService.updateById(user);
        return new Result(flag?Code.UPDATE_OK:Code.UPDATE_ERR,null,flag?"修改成功":"修改失败");
    }
    @GetMapping("/login")
    public Result login(String username ,String password)
    {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        User login = userService.login(user);
        if(login==null)
        {
            return new Result(Code.LOGIN_ERR,null,"没有该账号");
        }
        else if(!(login.getPassword().equals(user.getPassword())))
        {
            return new Result(Code.LOGIN_ERR,null,"账号或密码错误");
        }
        else if(login.getIsAuth()==1)
        {
            HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
            HttpSession session = request.getSession();
            session.setAttribute("uid",login.getUid());
            return new Result(Code.IS_AUTH,login.getUid(),"进入管理员页面");
        }
        else
        {
            HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
            HttpSession session = request.getSession();
            session.setAttribute("uid",login.getUid());
            return new Result(Code.LOGIN_OK,login.getUid(),"登录成功");
        }
    }
    @PostMapping("/register")
    public Result register(@RequestBody User user)
    {
        boolean flag = userService.register(user);
        return new Result(flag?Code.SAVE_OK:Code.SAVE_ERR,null,flag?"注册成功":"注册失败");
    }
}
