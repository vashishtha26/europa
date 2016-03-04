package io.egen.febeuropa.repository;

import java.util.List;

import io.egen.febeuropa.entity.Title;

public interface TitleRepository {
	public List<Title> findAllTitles();
	public Title addTitle(Title title);
	public Title updateTitle(Title title);
	public void deleteTitle(Title title);
	public Title findTitleById(String titleId);
	public List<Title> findByType(String type);
	public List<Title> findByYear(String year);
	public List<Title> findByGenre(String genre);
}