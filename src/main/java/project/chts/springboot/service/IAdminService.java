package project.chts.springboot.service;

import project.chts.springboot.model.UserList;

public interface IAdminService {

	//1.registerAdmin
	//void insertAdmin(Admin admin);
	
   //2.loginAdmin
	UserList userlist (String email, String password);
	
	//3.adminProfile
	//Admin getAdmin(int adminId);
	
	
	//TODO: session/authentication yet to be implemented 
}
