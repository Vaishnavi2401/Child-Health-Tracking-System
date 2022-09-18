package project.chts.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.chts.springboot.model.Immunisation;

@Repository
public interface ImmunisationRepository extends JpaRepository<Immunisation, Integer> {

}



