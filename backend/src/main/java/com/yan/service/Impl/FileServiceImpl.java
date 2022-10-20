package com.yan.service.Impl;

import com.yan.controller.Code;
import com.yan.exception.BusinessException;
import com.yan.service.IFileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;
@Service
public class FileServiceImpl implements IFileService {
    private String uploadPath=System.getProperty("user.dir")+"\\src\\main\\resources\\static\\imgs";
    @Override
    public String load(MultipartFile uploadFile) {
        try {
            uploadFile.transferTo(new File(uploadPath+ UUID.randomUUID()+uploadFile.getOriginalFilename()));
        } catch (IOException e) {
            throw new BusinessException(Code.BUSINESS_ERR,"上传失败");
        }
        String path = uploadPath+ UUID.randomUUID()+uploadFile.getOriginalFilename();
        return path;
    }
}
