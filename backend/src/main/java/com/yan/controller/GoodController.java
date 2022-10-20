package com.yan.controller;

import com.yan.domain.Good;
import com.yan.service.IFileService;
import com.yan.service.IGoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;


@RestController
@RequestMapping("/goods")
public class GoodController {
    @Autowired
    IFileService fileService;
    @Autowired
    IGoodService goodService;
    @GetMapping
    public Result getAll() {
        Map<String, Object> map = goodService.getMap(null);
        return new Result(map == null ? Code.GET_ERR : Code.GET_OK, map, map == null ? "查询失败" : "查询成功");
    }
    @PostMapping("/upload")
    public Result upload(@RequestPart(value="file") MultipartFile uploadFile) {
        if(uploadFile.isEmpty())
        {
            return new Result(Code.SAVE_ERR,"文件为空");
        }
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        HttpSession session = request.getSession();
        String path = fileService.load(uploadFile);
        session.setAttribute("path",path);
        return new Result(Code.SAVE_OK,"上传成功");
    }
    @PostMapping
    public Result add(@RequestBody Good good) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        HttpSession session = request.getSession();
        String path = (String)session.getAttribute("path");
        good.setImgs(path);
        boolean flag = goodService.save(good);
        return new Result(flag?Code.SAVE_OK:Code.SAVE_ERR,null,flag?"添加成功":"添加失败");
    }
    @DeleteMapping
    public Result delete(String gid)
    {
        boolean flag = goodService.removeById(gid);
        return new Result(flag?Code.DELETE_OK:Code.DELETE_ERR,null,flag?"删除成功":"删除失败");
    }
    @PutMapping
    public Result update(@RequestBody Good good)
    {
        boolean flag = goodService.updateById(good);
        return new Result(flag?Code.UPDATE_OK:Code.UPDATE_ERR,null,flag?"修改成功":"修改失败");
    }
    @GetMapping("/getByGid")
    public Result getByGid(String gid)
    {
        Good good = goodService.getById(gid);
        return new Result(good == null ? Code.GET_ERR : Code.GET_OK, good, good == null ? "查询失败" : "查询成功");
    }
}
