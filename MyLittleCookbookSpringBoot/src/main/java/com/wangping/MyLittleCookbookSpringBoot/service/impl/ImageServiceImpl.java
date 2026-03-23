package com.wangping.MyLittleCookbookSpringBoot.service.impl;

import com.wangping.MyLittleCookbookSpringBoot.service.IImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements IImageService {

    @Value("${app.upload.dir}")
    private String uploadDir;

    @Override
    public String saveImage(MultipartFile image) {
        try {
            // 1. Ensure the upload directory exists
            Path dirPath = Paths.get(uploadDir);
            Files.createDirectories(dirPath);

            // 2. Avoid filename collisions with a UUID prefix
            String fileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
            Path filePath = dirPath.resolve(fileName);

            // 3. REPLACE_EXISTING prevents crash if file already exists
            Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
            return "/photos/" + fileName;

        } catch (IOException e) {
            throw new RuntimeException("Failed to upload image: " + e.getMessage());
        }
    }
}
