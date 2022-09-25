package project.chts.springboot.repository;

import org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties.Credential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.UserList;

@Repository
public interface UserListRepository extends JpaRepository<UserList, Integer> {

	UserList findByEmail(String email);
	
	
}