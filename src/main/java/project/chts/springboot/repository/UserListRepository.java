package project.chts.springboot.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import project.chts.springboot.exception.UserNotFoundException;
import project.chts.springboot.model.UserList;

@Repository
@Transactional
public interface UserListRepository extends JpaRepository<UserList, Integer> {

	static Optional<UserList> findByEmailAndPassword(String email_Id, String password) {
		
		return null;
	}

//	static Optional<UserList> findByEmailAndPassword(String email, String password) {
//		
//		return null;
//	}

	//UserList findByEmail(String Email);


}
