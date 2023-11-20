export default {
	getRole: (role) => {
		if (role == 'S') return "系統管理員"
		else if (role == 'A') return "助理";
		else if (role == 'B') return "部門經理";
		else if (role == 'C') return "客服人員";
		else if (role == 'D') return "後勤人員";
		else if (role == 'E') return "主管";
		else if (role == 'F') return "原廠人員";
		else if (role == 'G') return "ARM";
		else if (role == 'H') return "出納主管";
		else if (role == 'I') return "信管人員";
		else if (role == 'J') return "財務長";
		else if (role == 'L') return "離職";
		else return "一般使用者";
	}
	,getORDAMT: (ORD_AMT) => {
		if (ORD_AMT == '') return " "
		else if (ORD_AMT == 'Y') return "是";
		else if (ORD_AMT == 'N') return "否";
	}
	,getSCHEDULE: (SCHEDULE) => {
		if (SCHEDULE == '1') return "日"
		else if (SCHEDULE == '2') return "週";
		else if (SCHEDULE == '3') return "月";
		else return " "
	}
	,getTRF_FEE: (TRF_FEE) => {
		if (TRF_FEE == 'PSR001') return "交通津貼_業務代表"
		else if (TRF_FEE == 'PSR005') return "交通津貼_主任";
		else return " "
	}
	,getMEAL_FEE: (MEAL_FEE) => {
		if (MEAL_FEE == 'PSR002') return "誤餐津貼_經理"
		else if (MEAL_FEE == 'PSR003') return "誤餐津貼_業務代表";
		else if (MEAL_FEE == 'PSR007') return "誤餐津貼_主任";
		else if (MEAL_FEE == 'PSR009') return "誤餐津貼_不計日當";
		else return " "
	}
}