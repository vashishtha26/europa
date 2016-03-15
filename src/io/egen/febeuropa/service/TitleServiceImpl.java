package io.egen.febeuropa.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.egen.febeuropa.entity.Title;
import io.egen.febeuropa.exception.TitleBadRequest;
import io.egen.febeuropa.exception.TitleNotFoundException;
import io.egen.febeuropa.repository.TitleRepository;

@Service
@Transactional
public class TitleServiceImpl implements TitleService {

	@Autowired
	private TitleRepository dao;

	@Override
	public List<Title> findAllTitles() {
		return dao.findAllTitles();
	}

	@Override
	public Title findTitleById(String titleId) throws TitleNotFoundException {
			Title title =  dao.findTitleById(titleId);
			if(title == null) {
				throw new TitleNotFoundException();
			}
			else {
				return title;
			}
		}

	@Override
	public Title addTitle(Title title) throws TitleBadRequest {
		if(title.getTitle()==null || title.getTitleId() != null)
			throw new TitleBadRequest();
		else
			return dao.addTitle(title);
	}

	@Override
	public Title updateTitle(String titleId, Title title) throws TitleNotFoundException {
		Title existing =  dao.findTitleById(titleId);
		if(existing == null) {
			throw new TitleNotFoundException();
		}
		else {
			return dao.updateTitle(title);
		}
	}

	@Override
	public void deleteTitle(String titleId) throws TitleNotFoundException {
		Title existing =  dao.findTitleById(titleId);
		if(existing == null) {
			throw new TitleNotFoundException();
		}
		else {
			dao.deleteTitle(existing);
		}
		
	}

	@Override
	public List<Title> findByType(String type) {
		return dao.findByType(type);
	}

	@Override
	public List<Title> findByYear(String year) {
		return dao.findByYear(year);
	}

	@Override
	public List<Title> findByGenre(String genre) {
		return dao.findByGenre(genre);
	}
	

}
