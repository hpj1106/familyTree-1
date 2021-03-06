package com.familyTree.controller;  
  
import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;  
import org.springframework.ui.Model;  
import org.springframework.web.bind.annotation.RequestMapping;

  
  
@Controller  
@RequestMapping("login")  
public class LoginController {  
	private static final Logger logger = LogManager.getLogger(LoginController.class);
	
    @RequestMapping("index")  
    public String toIndex(HttpServletRequest request,Model model){
    	logger.info("进入首页！");
        return "index";  
    }
    
    @RequestMapping("toLogin")  
    public String toLogin(HttpServletRequest request,Model model){
        return "login";  
    }
    
    @RequestMapping("signup")  
    public String signup(HttpServletRequest request,Model model){
        return "signup";  
    }
}