export default {
	LOGOUT: () => {
		removeValue('LOGIN_USER_INFO');	
		removeValue('authority');	
		
		if(!appsmith.store.savePWD){			
			removeValue('LOGIN_USER');	
			removeValue('LOGIN_PASS');	
		}
		showAlert("成功登出！");
		navigateTo("Login");
	}
}