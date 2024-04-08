function sum(list){
    res = 0;
    for (let i of list){
        res = res + Number(i);
        console.log(typeof res);
    }
    return res;
}
function returnMess(num){
    const listLength = Questions.length - 1;
    if (num === listLength){
        return "최하점이 나왔군요. 정말, 정말 인생이 힘들다고 느끼실 것 같네요. 제가 그 심정을 완벽히 알 수는 없지만, 조언을 해드릴 수 있을 것 같아요. 일단, 지금 해결할 수 있는 고민과 할 수 없는 고민들로 나누어봐요. 그리고 해결할 수 없는 고민, 근심, 걱정, 슬픔은 과감하게 버리세요. 물론 그 과정이 쉽지만은 않아요. 하지만.. 그런 걱정들을 껴안고 살기에는 인생이 너무 버겁지 않을까요?";
    }else if(num <= listLength * 1.1){//22
        return "정말 힘든 것 같네요.. 이럴때에는 시점의 변화도 큰 역할을 할거예요. 어쩌면 당신이 세상을 너무 어둡게 보거나 그런것 일 수 있어요. 세상을 긍정적으로 생각해보면 어떨까요?";
    }else if(num <= listLength * 1.3){//26
        return "점수가.. 굉장히 낮네요. 요즘 주변에서 안좋은 일들이 많이 벌어졌나봐요.. 흠.. 그 일들을 한 번에 해결하려 하지 말고 어쩌면 잠시 쉬며 마음을 가다듬는 것이 오히려 더 효과적일 때가 있어요. 다시 힘내시기를 바랍니다!";
    }else if(num <= listLength * 1.8){//34
        return `${listLength * 5}가 최고점수인데 ${num}이 나왔네요.. 정말 거대한 슬픔이 있는 것 같아요. 흠.. 가끔은 가족이 도움이 될 수 있답니다. 오랜만에 가족 곁에 가보는건 어떨까요..`;
    }else if(num <= listLength * 2.1){//44
        return "당신은 꽤 큰 슬픔이 있는 것 같네요.. 인생에 회의감이 들 때도 있을것 같군요. 하지만 어쩌면.. 그 슬픔에서 한발짝 뒤로 와보면.. 그 슬픔을 해결할 방법을 찾을 수 있을거예요.";
    }else if(num <= listLength * 2.5){//50
        return "당신은 큰 근심이 있는 것 같군요.. 하지만 그 근심을 계속 들고 가다간 인생이 너무 힘들거예요. 차라리 지금 삶을 더 즐겁게 사는건 어떨까요?";
    }else if(num <= listLength * 2.8){//56
        return "흠.. 요즘 안좋은 일이 있었나요? 가끔은 슬픔에 빠져있는것이 도움이 되기도 한답니다. 다시 힘내시기를 바랍니다.";
    }else if(num <= listLength * 3){//60
        return "흠.. 당신은 꽤 큰 고민이 있어보이는 것 같네요.. 하지만 이런 고민들도 나중에 볼땐 별거 아닐거예요. 다시 힘내시기를 바랍니다!";
    }else if(num <= listLength * 3.3){//66
        return "당신은 고민이나 근심이 있는 것 같습니다. 그 일에 너무 스트레스를 받지 말고, 이 또한 지나갈거란 사실을 기억하세요!";
    }else if(num <= listLength * 3.6){//72
        return "당신은 약간의 고민이 있나보군요.. 그 고민을 해결하기 위해 노력하다 보면 어느새 어깨가 가벼워지지 않을까요?";
    }else if(num <= listLength * 4){//80
        return "당신은 가벼운 고민이 있는 모양이군요.. 그런 고민들을 조금씩 해결하다 보면 어느새 가벼운 마음으로 생활하고 있을거예요!";
    }else if(num <= listLength * 4.5){//90
        return "당신은 행복한 사람입니다. 행복을 누리세요!";
    }else if(num < listLength * 5){//99
        return "당신은 꽤나 행복한 사람입니다. 현재를 즐기세요!";
    }else{//100
        return "흠잡을게 없네요, 당신은 행복한 사람입니다!";
    }
}
var plusList = [];
for(let i = 0; i < 20; i++){
    plusList.push(0);
}
var Questions = [
    "1. 요즘 자신의 상황이 잘 풀릴수록 높은 숫자를 골라주세요!",
    "2. 요즘 자신과 친구의 사이가 좋을수록 높은 숫자를 골라주세요!",
    "3. 요즘 자신에게 근심이 없을수록 높은 숫자를 골라주세요!",
    "4. 만약 자신에게 고민을 들어줄 친구가 필요할 수록 낮은 숫자를 선택해주세요!",
    "5. 자살하고 싶지 않을수록 높은 숫자를 선택해주세요!",
    "6. 자신의 삶이 가치있다고 생각할수록 큰 수를 선택해주세요!",
    "7. 자신을 믿는다고 생각할수록 큰 수를 선택해주세요!",
    "8. 내 자신이 좋을수록 큰 수를 선택하세요!",
    "9. 내 자신이 부끄럽지 않을수록 높은 숫자를 선택해주세요!",
    "10. 나 자신을 포기하고 싶을수록 작은 숫자를 선택해주세요!",
    "11. 인생이 헛되다고 느끼는 날이 많을수록 작은 숫자를 선택해주세요!",
    "12. 만사가 귀찮고 모든것에 의욕이 없을수록 낮은 숫자를 선택해주세요!",
    "13. 어떤 일을 시작하려 할 때 나 자신의 실력을 의심하여 제대로 실행시키지 못한적이 많을수록 낮은 숫자를 선택해주세요!",
    "14. 자신이 스트레스나 어려움을 잘 극복해 낸다고 생각할수록 큰 수를 선택해주세요!",
    "15. 자신이 내린 결정에 후회를 많이 할수록 작은 수를 선택해주세요!",
    "16. 자신이 사회적으로 유용하다고 느낄수록 큰 수를 선택해주세요!",
    "17. 자신의 목표를 향해 나아갈 때 자신감을 느낄수록 큰 수를 선택해주세요!",
    "18. 자신의 미래가 가치있다고 생각할수록 큰 수를 선택해주세요!",
    "19. 일상생활이 즐거울수록 큰 수를 선택해주세요!",
    "20. 자기 자신을 사랑할수록 큰 수를 선택해주세요!",
    "검사가 모두 끝났습니다! 수고하셨습니다."
];
var ending = false;
var checked = false;
var index = 0;
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input[name="mood"]').forEach((elem) => {
        elem.addEventListener('change', function() {
            if (this.checked) {
                if (+this.value !== 0){
                    checked = true;
                }
                plusList[index] = +this.value;
            }
            //console.log(plusList);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const confirmBtn = document.getElementById('confirmBtn');
    const question = document.getElementById('question');
    const container = document.getElementById('radioContainer');
    confirmBtn.addEventListener('click', function() {
        if (checked){
            //console.log(index, Questions.length);
            index ++;
            question.textContent = Questions[index];
            if (index >= Questions.length - 1){
                if (!ending){
                    //console.log(sum(plusList), Questions.length - 1, plusList);
                    alert(returnMess(sum(plusList)));
                    ending = true;
                }
                Questions.push("검사가 모두 끝났습니다! 수고하셨습니다.");
            }
            checked = false;
            const radios = document.getElementsByName('mood');
            for (let i = 0; i < radios.length; i++) {
                if(index <= Questions.length - 1){
                    radios[i].checked = false;
                }
            }
        }else{
            alert("항목을 선택해주세요!");
        }
    });
});
