package project.chts.springboot.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import project.chts.springboot.model.UserList;
import project.chts.springboot.repository.UserListRepository;
import project.chts.springboot.exception.UserNotFoundException;

@Service
public class UserListService {
	
	@Autowired
	private UserListRepository userListRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	public List<UserList> findAllUser() {
		
		return userListRepository.findAll();
	}

	public UserList save(@Valid UserList userlist) {
		
		return userListRepository.save(userlist);
	}

	public UserList findById(Integer id) {
		UserList userlist = userListRepository.findById(id)
		.orElseThrow(() -> new UserNotFoundException("User not exist with id :" + id));
		return userlist;
	}
	
	public UserList updateUserList(Integer id, UserList userlistDetails){
		UserList userlist = userListRepository.findById(id)
				.orElseThrow(() -> new UserNotFoundException("User not exist with id :" + id));
		
		userlist.setFirst_Name(userlistDetails.getFirst_Name());
		userlist.setMiddle_Name(userlistDetails.getMiddle_Name());
		userlist.setLast_Name(userlistDetails.getLast_Name());
		userlist.setMobile_No(userlistDetails.getMobile_No());
		userlist.setEmail_Id(userlistDetails.getEmail_Id());
		userlist.setD_o_b(userlistDetails.getD_o_b());
		userlist.setJoining_Date(userlistDetails.getJoining_Date());
		userlist.setGroup_Name(userlistDetails.getGroup_Name());
		userlist.setPassword(userlistDetails.getPassword());
		userlist.setGender(userlistDetails.getGender());
		userlist.setMaritual_Status(userlistDetails.getMaritual_Status());
		
		UserList updatedUserList = userListRepository.save(userlist);
		return updatedUserList;
	}
	
	public UserList deleteUserList(Integer id){
		UserList userlist = userListRepository.findById(id)
				.orElseThrow(() -> new UserNotFoundException("User not exist with id :" + id));
		
		userListRepository.delete(userlist);
		return userlist;
	}
	
	
//	// check mail and pass
//		public UserList findUserByEmailAndPassword(UserList userlist)throws UserNotFoundException {
//			try {
//				UserList user = userListRepository.findByEmail(userlist.getEmail_Id());
//				String rawPassword = userlist.getPassword();
//				if (userlist != null && userlist.getEmail_Id().equals(user.getEmail_Id())
//						&& passwordEncoder.matches(rawPassword, user.getPassword())) {
//					UserList Result = user;
//					return Result;
//				}
//				throw new UserNotFoundException("Invalid email or password !, Try again.");
//			} catch (Exception e) {
//				throw new UserNotFoundException(e.getMessage());
//			}
//
//		}
	
	
	//@Override
	public static UserList userlist(String email, String password) {

		Optional<UserList> optional = UserListRepository.findByEmailAndPassword(email,password);

		return optional.orElseThrow(()-> new UserNotFoundException("Invalid email or password !!!!!!!!!!"));
		
	}

	
}


