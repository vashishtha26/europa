package io.egen.febeuropa.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import io.egen.febeuropa.entity.Title;

@Repository
public class TitleRepositoryImpl implements TitleRepository{
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Title> findAllTitles() {
		TypedQuery<Title> query = em.createQuery("FROM Title ", Title.class);
    	List<Title> titles = query.getResultList();
    	return titles;
	}

	@Override
	public Title findTitleById(String titleId) {
		Title title = em.find(Title.class, titleId);
		return title;
	}
	
	@Override
	public Title addTitle(Title title) {
		em.persist(title);
		return title;
	}

	@Override
	public Title updateTitle(Title title) {
		em.merge(title);
		return title;
	}

	@Override
	public void deleteTitle(Title title) {
		em.remove(title);
		
	}

	@Override
	public List<Title> findByType(String t) {
		TypedQuery<Title> query= em.createNamedQuery("Title.findByType" ,Title.class);
		query.setParameter("pType",t);
		List<Title> type1 = query.getResultList();
		return type1;
	}

	@Override
	public List<Title> findByYear(String year) {
		TypedQuery<Title> q= em.createNamedQuery("Title.findByYear",Title.class);
		q.setParameter("pYear", year);
		List<Title> year1= q.getResultList();
		return year1;
	}

	@Override
	public List<Title> findByGenre(String genre) {
		TypedQuery<Title> q= em.createNamedQuery("Title.findByGenre",Title.class);
		q.setParameter("pGenre", genre);
		List<Title> genre1= q.getResultList();
		return genre1;
	}

	
}

