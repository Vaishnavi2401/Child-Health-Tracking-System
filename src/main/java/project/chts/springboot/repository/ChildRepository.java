package project.chts.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.Child;

@Repository
public interface ChildRepository extends JpaRepository<Child, Integer>{
	

}
