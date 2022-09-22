package project.chts.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.chts.springboot.model.AddChild;
import project.chts.springboot.model.Child;
import project.chts.springboot.model.Family;
import project.chts.springboot.model.School;

@RestController
@RequestMapping("/v3")
public class AddChildController {
	@Autowired
	public ChildController childController;
	@Autowired
	public SchoolController schoolController;
	@Autowired
	public FamilyController familyController;
	
	@PostMapping("/add")
	public String saveNewChildInfo(@RequestBody AddChild addChild) {
		try {
		
		Child newChild= new Child();
		newChild.setAdhar_no(addChild.getAdhar_no());
		newChild.setAge(addChild.getAge());
		newChild.setBirthdate(addChild.getBirthdate());
		newChild.setGender(addChild.getGender());
		newChild.setFirstName(addChild.getFirstName());
		newChild.setLastName(addChild.getLastName());
		newChild.setRegistrationNo(addChild.getRegistrationNo());
		newChild=childController.createChild(newChild);
		
		School school = new School();
		school.setBlock(addChild.getBlock());
		schoolController.createSchools(school);
		
		Family family= new Family();
		family.setChildId(newChild.getChild_id());
		familyController.createFamilies(family);
		
		
		return "successfully saved";
		}catch (Exception e) {
			// TODO: handle exception
			return "error Occured";
		}
		
	}

}
