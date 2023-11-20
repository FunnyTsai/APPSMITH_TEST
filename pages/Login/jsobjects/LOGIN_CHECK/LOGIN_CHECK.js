export default {
	async LOGIN() {
		// try {
		var resultCount = 0;

		await check_password.run();
		resultCount = check_password.data[0].result_count;

		if (resultCount === 1) {
			await USER_INFO.run();
			storeValue('LOGIN_USER_INFO', USER_INFO.data[0]);	
			storeValue('authority', USER_INFO.data[0].USER_ROLE);	

			if(Checkbox1.isChecked){
				storeValue('LOGIN_USER', accountInput.text);
				storeValue('LOGIN_PASS', passwordInput.text);
				storeValue('savePWD', true);
			}
			else{
				removeValue('LOGIN_USER')
				removeValue('LOGIN_PASS')
				storeValue('savePWD', false);
			}
			showAlert("成功登入！");
			navigateTo("Home");
		}
		else{
			showAlert("帳號或密碼錯誤！請再次登入！");
		}
		// } 
		// catch (error) {
		// console.error("An error occurred:", error);
		// return -1;
		// }
	},
	getMd5(password) {
		var md5_text = md5(password);		
		return md5_text;
	}
}