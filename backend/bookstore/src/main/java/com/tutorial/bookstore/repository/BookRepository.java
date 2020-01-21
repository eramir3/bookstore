package com.tutorial.bookstore.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tutorial.bookstore.domain.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

	List<Book> findByTitleContaining(String keyword);
}
