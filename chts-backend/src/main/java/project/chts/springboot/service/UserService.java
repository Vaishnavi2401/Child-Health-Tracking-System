//package project.chts.springboot.service;
//
//import java.util.List;
//
//import javax.servlet.http.HttpSession;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import project.chts.springboot.exception.UserNotFoundException;
//import project.chts.springboot.model.UserList;
//import project.chts.springboot.repository.UserListRepository;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.stereotype.Service;
////
////import project.chts.springboot.model.UserList;
////import project.chts.springboot.repository.UserListRepository;
////
////@Service
////public class UserService {
////	
////	@Autowired
////	private UserListRepository userlistRepository;
////	
////	public UserList createUser(UserList userlist) {
////		return userlistRepository.save(userlist);
////	}	
////	
////}
//
//@Service
//public abstract class UserService implements UserListRepository{
//
//    @Value("${app.user.verification}") // set to YES
//    private Boolean requireActivation;
//
//    @Value("${app.secret}") // some random stuff
//    private String applicationSecret;
//
//    @Autowired
//    private UserListRepository repo;
//
//    @Autowired
//    private HttpSession httpSession;
//
//    public final String CURRENT_USER_KEY = "CURRENT_USER";
//
//    @Override
//    public UserList loadUserByEmail_Id(String Email_Id) throws UserNotFoundException {
//      UserList userlist = repo.findOneByEmail_Id(Email_Id);
//
////      if(Email_Id == null) {
////        throw new UserNotFoundException(Email_Id);
////      }
//      
//      if(Email_Id == null) {
//          throw new UserNotFoundException(Email_Id);
//      }
//      if(requireActivation && !Email_Id.getToken().equals("1")) {
//          UserList.error("User [" + Email_Id + "] tried to log in, but his account is not activated.");
//          throw new UserNotFoundException(Email_Id + " did not activate his account.");
//      }
//      httpSession.setAttribute(CURRENT_USER_KEY, Email_Id);
//
//      List<GrantedAuthority> auth = AuthorityUtils.commaSeparatedStringToAuthorityList((String) userlist.getRole());
//      return new project.chts.springboot.model.UserList();
//    }
//}
