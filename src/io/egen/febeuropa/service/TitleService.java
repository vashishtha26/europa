package io.egen.febeuropa.service;

import java.util.List;

import io.egen.febeuropa.entity.Title;
import io.egen.febeuropa.exception.TitleBadRequest;
import io.egen.febeuropa.exception.TitleNotFoundException;

public interface TitleService {
	List<Title> findAllTitles();
	Title addTitle(Title title) throws TitleBadRequest;
	Title updateTitle(String titleId,Title title) throws TitleNotFoundException;	 
	void deleteTitle(String titleId) throws TitleNotFoundException;
	Title findTitleById(String titleId) throws TitleNotFoundException;
	List<Title> findByType(String type);
	List<Title> findByYear(String year);
	List<Title> findByGenre(String genre);


}
