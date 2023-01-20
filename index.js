function WritetoCV(id, cv) {
    document.getElementById(cv).innerHTML = document.getElementById(id).value;
}
function BackgroundColor(id, cv) {
    document.getElementById(cv).style.backgroundColor = document.getElementById(id).value;
}
function Color(id, cv) {
    document.getElementById(cv).style.color = document.getElementById(id).value;
}
function FontFamily(id, cv) {
    console.log(document.getElementById(id).value);
    document.getElementById(cv).style.fontFamily = document.getElementById(id).value;
}
function PhotoFrame(id, cv) {
    const photo = document.getElementById(id).value;
    if (photo == 1) {
        document.getElementById(cv).style.borderRadius = "8em";
    }
    else if (photo == 2) {
        document.getElementById(cv).style.borderRadius = "2em";
    }
    else if (photo == 3) {
        document.getElementById(cv).style.borderRadius = 0;

    }
}
function LineColor(id, cv) {
    const lines = document.getElementsByClassName(cv);
    console.log(lines[0].style.borderBottomStyle);
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.border = "1px solid " + document.getElementById(id).value;

    }

}
function LineType(id, cv) {
    const lines = document.getElementsByClassName(cv);
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.borderBottomStyle = document.getElementById(id).value;

    }

}
function EducationInfo(id) {
    const number = document.getElementById(id).value;
    console.log(number);

    document.getElementById("education-info-number").innerHTML = ``;
    document.getElementById("cv-education-list-number").innerHTML=``;
    for (let i = 1; i <= number; i++) {
        document.getElementById("education-info-number").innerHTML += `<tr>
    <td><label for="okulno${i}">${i}.okul</label></td>
    <td>
        <input type="text" name="okulno${i}" onkeyup="Education(id,'cv-education-text${i}')" style="width: 5em" id="okulno${i}">
        <input type="text" name="okulno${i}-acıklama" placeholder="Açıklama" onkeyup="Education(id,'cv-education-text${i}-acıklama')" style="width: 5em;" id="okulno${i}-acıklama">
    </td>
    </tr>
`;

        document.getElementById("cv-education-list-number").innerHTML += `<li id="cv-education-text${i}"></li>
    <ul>
        <li id="cv-education-text${i}-acıklama"></li>
    </ul>
`;

    }


}
function Education(id,cv) {
    document.getElementById(cv).innerText=document.getElementById(id).value;

}
function TalentInfo(id){
    const number = document.getElementById(id).value;
    console.log(number);

    document.getElementById("talent-info-number").innerHTML = ``;
    document.getElementById("cv-talent-list-number").innerHTML=``;
    for (let i = 1; i <= number; i++) {
        document.getElementById("talent-info-number").innerHTML += `<tr>
    <td><label for="yetenekno${i}">${i}.yetenek</label></td>
    <td>
        <input type="text" name="yetenekno${i}" onkeyup="Talent(id,'cv-talent-text${i}')" style="width: 5em" id="yetenekno${i}">
        <input type="text" name="yetenekno${i}-acıklama" placeholder="Açıklama" onkeyup="Talent(id,'cv-talent-text${i}-acıklama')" style="width: 5em;" id="yetenekno${i}-acıklama">
    </td>
    </tr>
`;

        document.getElementById("cv-talent-list-number").innerHTML += `<li id="cv-talent-text${i}"></li>
    <ul>
        <li id="cv-talent-text${i}-acıklama"></li>
    </ul>
`;

    }

}
function Talent(id,cv) {
    document.getElementById(cv).innerText=document.getElementById(id).value;

}