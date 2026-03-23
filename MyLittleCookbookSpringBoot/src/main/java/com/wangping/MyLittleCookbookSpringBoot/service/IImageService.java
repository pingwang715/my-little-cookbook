package com.wangping.MyLittleCookbookSpringBoot.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface IImageService {
   String saveImage(MultipartFile image);
}
