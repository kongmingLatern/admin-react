package com.yan.domain;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import lombok.Data;

import java.util.Date;
@Data
@TableName("`order`")
public class Order {
    @TableId
    String oid;
    String uid;
    String gid;
    @TableField("oTime")
    Date oTime;
    @TableField("isFinish")
    int isFinish;
}
