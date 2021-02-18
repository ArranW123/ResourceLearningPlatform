package com.example.groupproject.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.groupproject.message.ResponseFile;
import com.example.groupproject.message.ResponseMessage;
import com.example.groupproject.model.Doc;
import com.example.groupproject.processor.DocStorage;
import com.example.groupproject.repository.DocRepository;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/")
public class DocController {
	
	@Autowired
	DocStorage docStorage;

	@PostMapping("/uploadFiles")
	public ResponseEntity<ResponseMessage> uploadMultipleFiles(@RequestPart("file") MultipartFile file) {
		String message = "";

		try {
			docStorage.saveFile(file);
	  
			message = "Uploaded the file successfully: " + file.getOriginalFilename();
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		  } catch (Exception e) {
			message = "Could not upload the file: " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
		  }
	}

	@GetMapping("/files")
  public ResponseEntity<List<ResponseFile>> getListFiles() {
    List<ResponseFile> files = docStorage.getFiles().map(dbFile -> {
      String fileDownloadUri = ServletUriComponentsBuilder
          .fromCurrentContextPath()
          .path("/files/")
          .path(dbFile.getId())
          .toUriString();

      return new ResponseFile(
          dbFile.getDocName(),
          fileDownloadUri,
          dbFile.getDocType(),
          dbFile.getData().length);
    }).collect(Collectors.toList());

    return ResponseEntity.status(HttpStatus.OK).body(files);
  }

	@GetMapping("/files/{id}")
  public ResponseEntity<byte[]> getFile(@PathVariable String id) {
	Doc doc = docStorage.getFile(id);

    return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + doc.getDocName() + "\"")
        .body(doc.getData());
  }
	
	@ExceptionHandler(MultipartException.class)
	public ResponseEntity<String> handleMultipartException(HttpServletRequest request, Exception e) {
	    return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
