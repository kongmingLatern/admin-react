package com.yan.domain;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class User {
    @TableId
    String uid;
    String username;
    String password;
    @TableField("realName")
    String realName;
    String tel;
    String address;
    double pullet;
    @TableField("isAuth")
    int isAuth;
}
