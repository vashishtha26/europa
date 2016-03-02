package io.egen.febeuropa.repository;

import java.util.List;

import io.egen.febeuropa.entity.User;

public interface UserRepository {
	public List<User> findAllUsers ();
	public User findUserById(String id);
	public User findUserByEmail(String email);
	public User createUser(User user);
	public User updateUser(User user);
	public void deleteUser(User user);

}
