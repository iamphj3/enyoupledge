$(function () {

var array=new Array(9);
 var post=$("#post"),yes=$("#yes"),no=$("#no");
 var count=0,flag=0;
 var i=0;

{ var question=["1,꿀 같은 쉬는 날! 주로 어떻게 시간을 보내시나요?",
 "2,대학 생활하면 빠질 수 없는 다양한 활동들! 어느 것에 더 관심있으신가요?",
 "3,'코로나 19로 인해서 누리지 못해 더 아쉬운 것은?'",
 "4,학우님에게 더 익숙한 일감호 풍경은?",
 "5,매학기마다 새로 사야하는 전공책들...다음 중 더 싫은 것은?",
 "6,좋아하는 스포츠 경기의 결승전! 어떻게 보는 것을 좋아하시나요?"];

 var pos=["집에서 뒹굴거린다",
"관심분야 동아리 활동!",
"만나지 못한 동기와 선배들, 경험하지 못한 대학생활",
"쨍쨍한 햇빛 받으며 수업들으러 가며 보는 일감호",
"한학기 쓰고 버릴건데 너무 비싸!! 아까운 내돈...",
"가족들과 혹은 혼자 집에서 편하게 시청한다."];

 var neg=["밖에 나가서 논다",
"공대의 다양한 행사!",
"영화관, 콘서트 등 마음껏 즐기지 못한 문화생활",
"운치있게 밤에 보는 일감호",
"책 사러 갈 시간도 없고 사러 나가기 너무 귀찮아!",
"친구들과 다 같이 모여서 떠들며 신나게 응원한다."];}

$("#post").text(question[count]);
$("#yes").text(pos[count]);
$("#no").text(neg[count]);


$("#yes").click(function () {
   if(count==6){alert("이미 모두 입력했습니다.");return;}
   switch(count){
      case 0: array[1]+=1; break;
      case 1: array[8]+=3; array[0]+=1; break;
      case 2: array[0]+=2; break;
      case 3: break;
      case 4: array[2]+=2; break;
      case 5: array[3]+=1; break;
   }
   count++;
   $("#post").text(question[count]);
   $("#yes").text(pos[count]);
   $("#no").text(neg[count]);
});

$("#no").click(function () {
   if(count==6){alert("이미 모두 입력했습니다.");return;}
   switch(count){
      case 0: array[0]+=1; array[6]+=1; break;
      case 1: array[6]+=1; array[7]+=1; break;
      case 2: array[1]+=2; break;
      case 3: array[4]+=2; array[5]+=2; array[0]-=1;break;
      case 4: array[5]+=2; array[4]+=1; break;
      case 5: array[6]+=2; break;
   }
   count++;
   $("#post").text(question[count]);
   $("#yes").text(pos[count]);
   $("#no").text(neg[count]);});

//yes,no에서 count가 6이면 호출할 함수
function final() {

}




});
