package com.example.imageapi.controller;

import com.example.imageapi.model.ImageDetails;
import com.example.imageapi.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @GetMapping
    public List<ImageDetails> getAllImages() {
        return imageService.getAllImages();
    }

    @PostMapping
    public ImageDetails createImage(@RequestBody ImageDetails imageDetails) {
        return imageService.saveImageDetails(imageDetails);
    }

    @DeleteMapping("/{id}")
    public String deleteImage(@PathVariable String id) {
        imageService.deleteImageById(id);
        return "Image with ID " + id + " has been deleted!";
    }
}
