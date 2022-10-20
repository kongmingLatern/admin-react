package com.yan.domain;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("goods")
public class Good {
    @TableId
    String gid;
    @TableField("gName")
    String gName;
    String type;
    @TableField("`desc`")
    String desc;
    String imgs;
    @TableField("goodCount")
    int goodCount;
    double price;
}
