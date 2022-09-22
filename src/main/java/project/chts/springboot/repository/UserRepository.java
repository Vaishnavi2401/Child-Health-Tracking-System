//package project.chts.springboot.repository;
//
//import javax.transaction.Transactional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//
//import project.chts.springboot.model.User;
//
//public interface UserRepository extends JpaRepository<User, Integer> 
//{
//	  User findByEmail(String email);
//	  
//	  User findByUserId(int id);
//
//	  @Modifying
//	  @Query("UPDATE User u SET u.password=?1  WHERE u.userId=?2")
//	  public void updateUserPassword(String password,int id);
//	 
//	  @Query(value = "select * from User",nativeQuery = true)
//		public void findAllUsers();
//	  
//
//	  
//	  
//	  
//	  
//	  
//	  
//	  
//		  
//		  //select u.email,u.lastname,a.city from user u inner join address a on u.userId = a.userId where u.userId = ?1
//	  
//	}