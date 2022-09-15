package project.chts.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.chts.springboot.model.UserList;
import project.chts.springboot.exception.UserNotFoundException;
import project.chts.springboot.repository.UserListRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserListController {
	
	@Autowired
	private UserListRepository userlistRepository;
	
	//get all UserList
	@GetMapping("/userlist")
	public List<UserList> getAllUsers(){
		return userlistRepository.findAll();
	}	
	
	// create userlist rest api
		@PostMapping("/userlist")
		public UserList createUsers(@Valid @RequestBody UserList userlist) {
			return userlistRepository.save(userlist);
		}
//		@PostMapping("userlist")
//		public ResponseEntity<UserList> createUser(@Valid @RequestBody UserList userlist){
//			UserList savedUser = userService.createUser(userlist);
//			return new ResponseEntity<UserList>(savedUser, HttpStatus.CREATED);
//		}
		
		// get userlist by id rest api
		@GetMapping("/userlist/{id}")
		public ResponseEntity<UserList> getUserListById(@PathVariable Integer id) {
			UserList userlist = userlistRepository.findById(id)
					.orElseThrow(() -> new UserNotFoundException("User not exist with id :" + id));
			return ResponseEntity.ok(userlist);
		}
		
		// update UserList rest api
		
		@PutMapping("/userlist/{id}")
		public ResponseEntity<UserList> updateUserList(@PathVariable Integer id, @RequestBody UserList userlistDetails){
			UserList userlist = userlistRepository.findById(id)
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
			
			UserList updatedUserList = userlistRepository.save(userlist);
			return ResponseEntity.ok(updatedUserList);
		}
		
		// delete userlist rest api
		@DeleteMapping("/userlist/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteUserList(@PathVariable Integer id){
			UserList userlist = userlistRepository.findById(id)
					.orElseThrow(() -> new UserNotFoundException("User not exist with id :" + id));
			
			userlistRepository.delete(userlist);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		

}
