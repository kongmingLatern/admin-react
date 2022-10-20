package com.yan.domain;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("goods")
public class Good {
    @TableId
    String gid;
    String gName;
    String type;
    String desc;
    String imgs;
    int goodCount;
    double price;
}
