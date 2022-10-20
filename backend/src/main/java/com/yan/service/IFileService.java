package com.yan.service;

import org.springframework.web.multipart.MultipartFile;

public interface IFileService {
    String load(MultipartFile uploadFile);
}
