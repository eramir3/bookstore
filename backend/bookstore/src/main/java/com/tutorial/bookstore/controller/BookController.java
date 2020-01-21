package com.tutorial.bookstore.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.tutorial.bookstore.domain.Book;
import com.tutorial.bookstore.dto.request.BookIdsRequestDto;
import com.tutorial.bookstore.dto.response.ResponseDto;
import com.tutorial.bookstore.mapper.MapValidationErrorService;
import com.tutorial.bookstore.service.BookService;

@RestController
@RequestMapping("/book")
public class BookController {
	
	@Autowired
    private MapValidationErrorService mapValidationErrorService;

	@Autowired
	private BookService bookService;
	
	@PostMapping("/add")
	public ResponseEntity<?>  addBookPost(@Valid @RequestBody Book book, BindingResult result) {
		
		ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        
		if(errorMap!=null) 
        	return errorMap;
       
        Book newBook = bookService.save(book);
        
        //ResponseDto success = responseDtoMapper.mapCreationResponse(newBook);
        return new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
	}
	
	@PostMapping("/add/image")
	public ResponseEntity<ResponseDto> upload(@RequestParam("id") Long id, HttpServletResponse response, HttpServletRequest request) {
		
		try {
			//Book book = bookService.findById(id);
			MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
			Iterator<String> it = multipartRequest.getFileNames();
			MultipartFile multipartFile = multipartRequest.getFile(it.next());
			String fileName = id+".png";
			
			
			byte[] bytes = multipartFile.getBytes();
			BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/static/image/book/"+fileName)));
			stream.write(bytes);
			stream.close();
			
			return new ResponseEntity("Upload Success!", HttpStatus.OK);
		} 
		catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity("Upload failed!", HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/{id}")
	public Optional<Book> getBook(@PathVariable("id") Long id){
		Optional<Book> book = bookService.findById(id);
		return book;
	}
	
	@GetMapping("/bookList")
	public List<Book> getBookList() {
		return bookService.findAll();
	}
	
	@PatchMapping("/update")
	public Book updateBookPost(@RequestBody Book book) {
		return bookService.save(book);
	}
	
	@PatchMapping("/update/image")
	public ResponseEntity updateImagePost(
			@RequestParam("id") Long id,
			HttpServletResponse response, HttpServletRequest request
			){
		try {
			//Book book = bookService.findOne(id);
			MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
			Iterator<String> it = multipartRequest.getFileNames();
			MultipartFile multipartFile = multipartRequest.getFile(it.next());
			String fileName = id+".png";
			
			Files.delete(Paths.get("src/main/resources/static/image/book/"+fileName));
			
			byte[] bytes = multipartFile.getBytes();
			BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/static/image/book/"+fileName)));
			stream.write(bytes);
			stream.close();
			
			return new ResponseEntity("Upload Success!", HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity("Upload failed!", HttpStatus.BAD_REQUEST);
		}
	}
	
	@DeleteMapping("/remove/{id}")
	public ResponseEntity remove(@PathVariable("id") Long id) throws IOException {
		
		bookService.removeOne(id);
		
		//String fileName = id+".png";
		
		//Files.delete(Paths.get("src/main/resources/static/image/book/"+fileName));
		
		return new ResponseEntity("Remove Success!", HttpStatus.OK);
	}
	
	@DeleteMapping("/removeBooks")
	public ResponseEntity removeBookList(@RequestBody List<Long> ids) throws IOException {
		
		
		bookService.removeAllSelected(ids);
		
		//String fileName = id+".png";
		
		//Files.delete(Paths.get("src/main/resources/static/image/book/"+fileName));
		
		return new ResponseEntity("Remove Success!", HttpStatus.OK);
	}
	
	@GetMapping("/searchBook")
	public List<Book> searchBook (@RequestBody String keyword) {
		List<Book> bookList = bookService.blurrySearch(keyword);
		
		return bookList;
	}
}
