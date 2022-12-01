function add(){
	if(frm.resist_month.value.length==0){
		alert("수강월이 입력되지 않았습니다.");
		frm.resist_month.focus();
		return false;
	}
	else if(frm.c_name.value==0){
		alert("회원명이 선택되지 않았습니다.");
		frm.c_name.focus();
		return false;		
	}
	else if(frm.class_area[0].checked==false && 
			frm.class_area[1].checked==false && 
			frm.class_area[2].checked==false && 
			frm.class_area[3].checked==false && 
			frm.class_area[4].checked==false){
		alert("강의장소가 선택되지 않았습니다.");
		frm.class_area.focus();
		return false;
	}
	else if(frm.class_name.value==0){
		alert("강의명이 선택되지 않았습니다.");
		frm.class_name.focus();
		return false;
	}
	else{
		alert("수강신청이 완료되었습니다.");
		document.frm.submit();
		return true;
	}
}

function res(){
	alert("정보를 지우고 다시 입력합니다!");
	document.frm.reset();
}

function getvalue(c_no){ // select에서 선택된 value값을 c_no로 가져옴
	document.getElementById("c_no").value = c_no; // 불러운 c_no에 getvalue의 c_no라는 인자값 넣기
	c_no2 = c_no; // c_no2를 인자값 c_no로 지정
}

function getvalue2(tuition){ // select에서 선택된 value값을 tuition으로 가져옴
	if(c_no2 >= 20000){
		document.getElementById("tuition").value = tuition/2;
		// 회원 번호(c_no)가 20000 이상일 시 수강료(tuition) 반값 할인
	}
	else
	{
		document.getElementById("tuition").value = tuition; 
		// 불러운 tuition에 getvalue의 tuition라는 인자값 넣기
	}
}