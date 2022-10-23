package com.yan.service.Impl;

import com.yan.controller.Code;
import com.yan.exception.BusinessException;
import com.yan.service.IFileService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;
@Service
public class FileServiceImpl implements IFileService {
    @Value("${upload}")
    private String uploadPath;
    @Override
    public String load(MultipartFile uploadFile) {
        String imgName=UUID.randomUUID()+uploadFile.getOriginalFilename();
        String path=uploadPath+ imgName;
        try {
            uploadFile.transferTo(new File(path));
        } catch (IOException e) {
            throw new BusinessException(Code.BUSINESS_ERR,"上传失败");
        }
        return imgName;
    }
}
