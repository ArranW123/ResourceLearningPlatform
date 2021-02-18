package com.example.groupproject.processor;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.groupproject.model.Doc;
import com.example.groupproject.repository.DocRepository;

@Service
public class DocStorage {
	@Autowired
	DocRepository docRepository;
	
	public Doc saveFile(MultipartFile file) {
		String docname = file.getOriginalFilename();
		try {
			Doc doc = new Doc(docname,file.getContentType(),docname, file.getBytes());
			return docRepository.save(doc);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public Doc getFile(String fileId){
		return docRepository.findById(fileId).get();
	}
	public Stream <Doc> getFiles(){
		return docRepository.findAll().stream();
	}
}
